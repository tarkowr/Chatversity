import { Injectable, OnInit } from '@angular/core'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import { BehaviorSubject, Subscription, ReplaySubject, Subject, Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  chatManager: any
  currentUser: any
  latestRoom: any
  latestReadCursor: any
  messages: Subject<any> = new Subject<any>()
  onlineUsers: Subject<any> = new Subject<any>()
  roomsAndMessages: any
  rooms: Array<any> = []

  constructor(private http: HttpClient) { this.messages = new Subject<any>() }

  //
  // ─── GET ONLINE USERS ─────────────────────────────────────────────────────────
  //

  getOnlineUsers(): Observable<any> {
    return this.onlineUsers.asObservable()
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── HANDLE DELETE ROOM ─────────────────────────────────────────────────────────
  //

  deleteRoom(user, id) {

    return user.deleteRoom({ roomId: id })
    .then(() => {
      this.latestReadCursor = false
      this.latestRoom = false

      this.latestRoom = this.getLatestRoom(user)

      return this.latestRoom
    })
    .catch(err => {
      console.error(`Error deleting room ${id}: ${err}`)
    })
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── HANDLE LEAVE ROOM ─────────────────────────────────────────────────────────
  //

  leaveRoom(user, id) {
    return user.leaveRoom({ roomId: id })
    .then(room => {
      this.latestReadCursor = false
      this.latestRoom = false

      this.latestRoom = this.getLatestRoom(user)

      return this.latestRoom
    })
    .catch(err => {
      console.error(`Error leaving room ${id}: ${err}`)
    })
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── SET READ CURSOR ────────────────────────────────────────────────────────────
  //

  setLatestReadCursor(user, roomId) {

    // Get position (ID) of latest room message
    this.fetchRoomMessages(user, roomId, '', 1).then((messages) => {
      if (!messages.length) {
        user.rooms.forEach(room => {
          if (room.id === roomId) {
            this.latestRoom = room
            return
          }
        })
      } else {
        // Set position of cursor to match
        user.setReadCursor({
            roomId: roomId,
            position: messages[0].id
          })
          .then(() => {
            user.rooms.forEach(room => {
              if (room.id === messages[0].roomId) {
                this.latestRoom = room
              }
            })
          })
          .catch(err => {})
      }
    })
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── SET READ CURSOR ────────────────────────────────────────────────────────────
  //

  setReadCursor(user, roomId, position) {

    user.setReadCursor({
      roomId: roomId,
      position: position
    })
    .then(() => {})
    .catch(err => {})
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── GET LATEST ROOM ────────────────────────────────────────────────────────────
  //

  getLatestRoom(user) {
    if (this.latestRoom) { return this.latestRoom }

    let latestRoom
    const latestReadCursor = this.getLatestReadCursor(user)

    if (!latestReadCursor) {
      return user.rooms[0]
    }

    user.rooms.forEach(room => {
      if (room.id === latestReadCursor.roomId) {
        latestRoom = room
      }
    })

    return latestRoom
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── GET LATEST CURSOR ──────────────────────────────────────────────────────────
  //

  getLatestReadCursor(user) {

    if (this.latestReadCursor) { return this.latestReadCursor }
    const cursors = []

    // Get user cursor from each room
    user.rooms.forEach(room => {
      cursors.push(user.readCursor({ roomId: room.id }))
    })

    // Sort to find lowest
    const sorted = cursors.sort()
    const latestCursor = sorted[0]
    this.latestReadCursor = latestCursor

    return latestCursor
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── CHECK IF ROOM HAS MESSAGES ──────────────────────────────────────────────────────────
  //

  roomHasMessages(user, roomId) {

    if (!this.rooms) { return false }

    this.rooms.forEach(room => {
      if (room.id === roomId) { return true}
    })

    return false
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── GET ROOM MESSAGES ───────────────────────────────────────────────────
  //

  fetchRoomMessages(user, roomId, direction = 'older', limit = 0) {

    if (this.roomHasMessages(user, roomId)) {
      this.rooms.forEach(room => {
        if (room.id === roomId) { return room[1]}
      })
    }

    return user.fetchMultipartMessages({
      roomId: roomId,
      direction: direction,
      limit: limit,
    })
      .then(messages => {

        const roomWithMessages = new Array(roomId, messages)

        this.rooms.push(roomWithMessages)
        return messages
      })
      .catch(err => {
        console.error(`Error fetching messages: ${err}`)
      })
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── JOIN ROOM ───────────────────────────────────────────────────
  //

  joinRoom(user: any, roomId: any) {

  return user.joinRoom({roomId: roomId})
      .then(room => {
        this.setLatestReadCursor(user, roomId)
        return room
      })
      .catch(err => {
        console.error(`Error joining room ${roomId}: ${err}`)
      })
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── DISCONNECT USER ───────────────────────────────────────────────────
  //

  disconnect() {
    this.currentUser.disconnect()
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── SUBSCRIBE TO EACH OF THE CURRENT USER'S ROOMS ───────────────────────────────────────────────────
  //

  subscribeToAllRooms() {
    const currentUser = this.currentUser

    if (! currentUser.rooms.length) { return }

    currentUser.rooms.forEach(room => {
      currentUser.subscribeToRoomMultipart({
          roomId: room.id,
          hooks: {
              onMessage: message => {
                this.messages.next(message)
              }
          },
          messageLimit: 10
      })
    })
  }
  // ─────────────────────────────────────────────────────────────────

  //
  // ─── GET ALL CHATKIT ROOMS ───────────────────────────────────────────────────
  //

  getAllRooms() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    })

    return this.http.get<any[]>(`${environment.apiUrl}/chatkit/rooms`)
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── SUBSCRIBE USER TO ROOM ───────────────────────────────────────────────────
  //

  subscribeToRoom(user, roomId) {
    user.subscribeToRoomMultipart({
      roomId: roomId,
      hooks: {
          onMessage: message => {
            this.messages.next(message)
          }
      },
      messageLimit: 10
    })
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── INITIALIZE CHATKIT ───────────────────────────────────────────────────
  //

  initChatkit(userId) {

    this.chatManager = new ChatManager({
      instanceLocator: 'v1:us1:a54bdf12-93d6-46f9-be3b-bfa837917fb5',
      userId: userId,
      tokenProvider: new TokenProvider({
        url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a54bdf12-93d6-46f9-be3b-bfa837917fb5/token'
      })
    })

    return this.chatManager.connect({
      onAddedToRoom: room => {
        // console.log(`Added to room ${room.name}`)
      },
      onRemovedFromRoom: room => {
        // console.log(`Removed from room ${room.name}`)
      },
      onRoomUpdated: room => {
        // console.log(`Updated room ${room.name}`)
      },
      onRoomDeleted: room => {
        // console.log(`Deleted room ${room.name}`)
      },
      onPresenceChanged: (state, user) => {
        this.onlineUsers.next({ state, user })
        // console.log(`User ${user.name} is ${state.current}`)
      }
    })
      .then(user => {
        this.currentUser = user
        localStorage.setItem('chatkitUserId', user.id)

        // If user has no rooms then return
        if (user.rooms.length) {
          // Subscribe to all user rooms to be notified of new messages
          this.subscribeToAllRooms()

          // Join the latest room
          const latestRoom = this.getLatestRoom(user)
          // console.log(latestRoom)

          this.joinRoom(user, latestRoom.id)
        }
        return user
      })
  }
  // ─────────────────────────────────────────────────────────────────
}
