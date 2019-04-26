import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ViewChildren, QueryList, ViewContainerRef} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { MessagingService } from '../Core/_services/messaging.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AppComponent } from '../app.component'
import { AuthService } from '../Core/_services/auth.service'
import { parseDate } from 'tough-cookie'
import { Observable } from 'rxjs'
import { UserService } from '../Core/_services/user.service'
import * as CryptoTS from 'crypto-ts'

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit {

  @ViewChildren('chatReel') chatReel: QueryList<ViewContainerRef>
  subscription: any
  fileToUpload: File
  imagePath: any
  selectedFile: File = null
  fd = new FormData()
  rooms: Array<any> = []
  currentUser: any
  user_id: any
  rooms_with_messages: any = {}
  current_room: any
  chatUser: any
  roomCreated: boolean
  roomNotifications: Array<any> = []
  room_messages: Array<any> = []
  url: string
  isConnection = false

  // TODO: Can probably remove these props
  _roomPrivate = ''
  selectedRoomMember: any
  messages: Object
  pondOptions: any
  finalRoomData: FormData
  roomInvite: string;
  get roomPrivate(): string {
    return this._roomPrivate
  }
  set roomPrivate(value: string) {
    this._roomPrivate = value
  }

  _message = ''
  get message(): string {
    return this._message
  }
  set message(value: string) {
    this._message = value
  }

  formImport = new FormGroup({
    userAvatarFileGroup: new FormGroup({
      avatar: new FormControl(''),
    }),
    roomNameGroup: new FormGroup({
      roomName: new FormControl('', [
        Validators.required,
        Validators.pattern(/(.*[a-z0-9]){3}/i),
        Validators.maxLength(60)
      ])
    }),
    privateRoomGroup: new FormGroup({
      privateRoom: new FormControl('')
    })
  })

  //
  // ─── CONSTRUCTOR ────────────────────────────────────────────────────────────────
  //
    @ViewChild('newRoomPond') pond: any
    pondFiles = []
    constructor(
      private http: HttpClient,
      private messageService: MessagingService,
      private authService: AuthService,
      private userService: UserService) {}
  // ────────────────────────────────────────────────────────────────────────────────


  pondHandleInit() {
    console.log('FilePond has initialised', this.pond)
  }


  pondHandleAddFile(event: any) {
    // event.preventDefault()
    console.log(event)
    this.pondFiles.push(event.file.file)



    console.log('A file was added')
    // removes the file at index 1
  }




  //
  // ─── HANDLE DELETE ROOM ─────────────────────────────────────────────────────────
  //

    deleteRoom(id) {
      // console.log(id)
      this.messageService.deleteRoom(this.currentUser, id).then((latestRoom) => {

        // remove local messages from the deleted room...
        for ( let i = 0; i < this.room_messages.length; i++) {
          if ( this.room_messages[i].id === id) {
            this.room_messages.splice(i, 1)
          }
        }

        // remove the deleted room from the local rooms array...
        for ( let i = 0; i < this.rooms.length; i++) {
          if ( this.rooms[i].id === id) {
            this.rooms.splice(i, 1)
          }
        }

        // ...then join the latest room
        this.messageService.joinRoom(this.currentUser, latestRoom.id).then((room) => {

        // update current room
        this.current_room = room

        // and get the room messages
        this.messageService.fetchRoomMessages(this.currentUser, room.id, '', 20).then((messages) => {
            this.room_messages = messages
            console.log(this.room_messages)

            console.log(messages)
          })
        })

      })
    }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── HANDLE LEAVE ROOM ─────────────────────────────────────────────────────────
  //

  leaveRoom(id) {
    // console.log(id)
    this.messageService.leaveRoom(this.currentUser, id).then((latestRoom) => {

      // Remove local messages from the room that the user left
      for ( let i = 0; i < this.room_messages.length; i++) {
        if ( this.room_messages[i].id === id) {
          this.room_messages.splice(i, 1)
        }
      }

      // Remove the room that the user left from the local rooms array
      for ( let i = 0; i < this.rooms.length; i++) {
        if ( this.rooms[i].id === id) {
          this.rooms.splice(i, 1)
        }
      }

      // Join the latest room
      this.messageService.joinRoom(this.currentUser, latestRoom.id).then((room) => {

      // Update current room
      this.current_room = room

      // Get the room messages
      this.messageService.fetchRoomMessages(this.currentUser, room.id, '', 20).then((messages) => {
          this.room_messages = messages
          // console.log(this.room_messages)
          // console.log(messages)
        })
      })
    })
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── DETECT FILE CHANGE FOR ROOM AVATAR ON CREATION ─────────────────────────────
  //

    onFileChange(event) {

      if (!(event.target.files && event.target.files[0])) { return }

      this.selectedFile = <File>event.target.files[0]
      this.fd.append('avatar', this.selectedFile, this.selectedFile.name)
    }
  // ────────────────────────────────────────────────────────────────────────────────



  //
  // ─── VIEW A USER IN THE ROOM ────────────────────────────────────────────────────
  //

    setSelectedRoomMember(user: any) {
      this.selectedRoomMember = user
    }
  // ────────────────────────────────────────────────────────────────────────────────



  //
  // ─── SEND A MESSAGE ─────────────────────────────────────────────────────────────
  //

    sendMessage() {
      const { message, currentUser } = this
      this.currentUser.sendMessage({
        text: message,
        roomId: this.current_room.id,
      }).then(res => {
        console.log(res)
        console.log()
      })
      this.message = ''
    }
  // ─────────────────────────────────────────────────────────────────



  //
  // ─── JOIN A ROOM ────────────────────────────────────────────────────────────────
  //

    joinRoom(roomID) {

      this.messageService.joinRoom(this.currentUser, roomID).then((room) => {

        // update current room
        this.current_room = room

        // and get the room messages
        this.messageService.fetchRoomMessages(this.currentUser, roomID, '', 20).then((messages) => {

          this.room_messages = messages
          console.log(this.room_messages)

          console.log(messages)
        })
      })

    }
  // ────────────────────────────────────────────────────────────────────────────────



  //
  // ─── CHECK UNREAD MESSAGES ──────────────────────────────────────────────────────
  //

    hasUnread(roomID) {

      let hasUnread = false // Track return status

      // First, check if cursor exists
      const cursor = this.currentUser.readCursor({
        roomId: roomID
      })

      // if read cursor ID !== latest message ID...
      this.currentUser.fetchMultipartMessages({ // Get latest message
        roomId: roomID,
        limit: 1,
      })
      .then(messages => {
        if (cursor) { // Has cursor so check cursor pos vs latest message id
          hasUnread = (cursor.position !== messages[0].initialId) ? true : false
        } else {
          // No cursor => set
        }
      })
      .catch(err => {
        console.log(`Error fetching messages: ${err}`)
      })

      return hasUnread
    }
  // ────────────────────────────────────────────────────────────────────────────────



  //
  // ─── GET CHATKIT USER ───────────────────────────────────────────────────────────
  //

    getUser(user_id) {
      return this.http.post<any>(`${environment.apiUrl}/chatkit/getuser`, {user_id})
      .toPromise()
      .then(res => {
        return res
        console.log(res)
      })
      .catch(error => console.log(error))
    }
  // ─────────────────────────────────────────────────────────────────



  //
  // ─── GET CHATKIT USERS ROOMS ────────────────────────────────────────────────────
  //

    getUserRooms(user_id) {
      return this.http.post<any>(`${environment.apiUrl}/chatkit/getuserrooms`, {user_id})
      .toPromise()
      .then(res => {
        // this.rooms = res;
        console.log(res)
        return res
      })
      .catch(error => console.log(error))
    }
  // ─────────────────────────────────────────────────────────────────



  //
  // ─── CREATE ROOM ────────────────────────────────────────────────────────────────
  //

    createRoom() { // TODO: Add to message service
      const roomName = this.formImport.value.roomNameGroup.roomName
      const privateRoom = this.formImport.value.privateRoomGroup.privateRoom
      // const roomCipher = CryptoJS.AES.encrypt('secret message', 'secret key').toString()

      console.log('Room Submitted!')
      // console.log(this.formImport)
      // console.log(this.finalRoomData)

      // If no file added => get ui avatar (add to file list)
      if ( this.pond.getFiles().length ) {

        // File has been added
        this.pond.processFile().then((processedFile) => {
          console.log(processedFile)
          console.log(processedFile.serverId)

          const filePath = processedFile.serverId + '.' + processedFile.fileExtension

          this.currentUser.createRoom({ // Create the room
            name: roomName,
            private: privateRoom,
            customData: {
              roomAvatar: filePath,
            }, // Add room avatar to custom room data
          }).then( newRoom => { // Succes
            this.rooms.push(newRoom) // Add the new room to the list
            this.roomCreated = true
            this.messageService.subscribeToRoom(this.currentUser, newRoom.id)
            // Join the latest room
      this.messageService.joinRoom(this.currentUser, newRoom.id).then((room) => {

        this.messageService.fetchRoomMessages(this.currentUser, room.id, '', 20).then((messages) => {

          this.room_messages = messages
          console.log(this.room_messages)
          console.log(messages)
        })
        // Update current room
        this.current_room = room
      })
    })
            .catch(err => { // Failed room creation
              console.log(`Error creating room ${err}`)
            })

            return
        })
      } else {
        // No image uploaded => create room without image
        this.currentUser.createRoom({ // Create the room
          name: roomName,
          private: privateRoom,
        }).then( newRoom => { // Succes
            this.rooms.push(newRoom) // Add the new room to the list
            this.roomCreated = true
            this.messageService.subscribeToRoom(this.currentUser, newRoom.id)
            // Join the latest room
      this.messageService.joinRoom(this.currentUser, newRoom.id).then((room) => {

        this.messageService.fetchRoomMessages(this.currentUser, room.id, '', 20).then((messages) => {

          this.room_messages = messages
          console.log(this.room_messages)
          console.log(messages)
        })
        // Update current room
        this.current_room = room
      })
    })
  }
}

  // ────────────────────────────────────────────────────────────────────────────────



  //
  // ─── CHECK IF MESSAGE TIMESTAMP IS TODAY ────────────────────────────────────────
  //

    MessageSentToday(msgDate: Date) {

      // get current date
      const currDate = new Date()
      currDate.setDate(currDate.getDate())
      // console.log(currDate);


      // get message date
      msgDate = new Date(msgDate)
      // console.log(msgDate);

      const daysBetween = Math.floor(( Date.parse(currDate.toDateString()) - Date.parse(msgDate.toDateString()) ) / 86400000)

      if (daysBetween >= 7) {
        // console.log('Message is at least 7 days old')
      }
      return false
    }
  // ────────────────────────────────────────────────────────────────────────────────



  ngOnInit() {


    this.finalRoomData = new FormData()

    this.authService.getCurrentUser().subscribe((user) => {
      this.currentUser = user

      if (user.rooms.length) {

        this.rooms = user.rooms
        if (localStorage.getItem('roomInvite') !== null) {
          let roomInvite = localStorage.getItem('roomInvite')
          const bytes  = CryptoTS.AES.decrypt(atob(roomInvite).toString(), '12345678901234567890')
          console.log(roomInvite)
          console.log(bytes)
          const plaintext = bytes.toString(CryptoTS.enc.Utf8)
          console.log(plaintext)

          console.log(JSON.parse(plaintext))
          this.joinRoom(JSON.parse(plaintext).roomId)
          localStorage.removeItem('roomInvite')
        } else {
          this.current_room = this.messageService.getLatestRoom(user)
          this.joinRoom(this.current_room.id)
        }

        this.messageService.messages.subscribe((message) => {
          this.room_messages.push(message)
        })
      }

      this.pondOptions = {
        fileRenameFunction: (file) => {

          const randomFileName = new Uint32Array(1)
          window.crypto.getRandomValues(randomFileName)
          return `${randomFileName}${file.extension}`
      },
        allowFileRename: true,
        instantUpload: false,
        class: 'my-filepond',
        multiple: false,
        labelIdle: 'Upload .jpeg or .png',
        acceptedFileTypes: 'image/jpeg, image/png',
        checkValidity: true,
        server: {
          url: `${environment.apiUrl}`,
          process: '/rooms/avatar/tmp',
          load: (source, load, error, progress, abort, headers) => {
            // Should request a file object from the server here
            // ...

            // Can call the error method if something is wrong, should exit after
            error('oh my goodness');

            // Can call the header method to supply FilePond with early response header string
            // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
            // headers(headersString);

            // Should call the progress method to update the progress to 100% before calling load
            // (endlessMode, loadedSize, totalSize)
            progress(true, 0, 1024);

            // Should call the load method with a file object or blob when done
            // load(file);

            // Should expose an abort method so the request can be cancelled
            return {
                abort: () => {
                    // User tapped cancel, abort our ongoing actions here

                    // Let FilePond know the request has been cancelled
                    abort();
                }
            };
        },
          revert: './revert.php',
          restore: './restore.php?id=',
          fetch: './fetch.php?data='
        }
      }

      console.log(this.current_room)
      console.log(user.rooms)
      console.log(user)
    })
  }

  ngAfterViewInit() {

    this.chatReel.changes.subscribe(c => {
      c.toArray().forEach(item => {
        item.nativeElement.offsetParent.scrollTop = item.nativeElement.offsetParent.scrollHeight
      })
    })
  }
}
