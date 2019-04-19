import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ViewChildren, QueryList, ViewContainerRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MessagingService } from '../Core/_services/messaging.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { AuthService } from '../Core/_services/auth.service';
import { parseDate } from 'tough-cookie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit {

  @ViewChildren('chatReel') chatReel: QueryList<ViewContainerRef>;
  currUser: any;
  subscription: any;
  incomingMessages: any;
  chatkitUser: any;
  fileToUpload: File;
  imagePath: any;
  notificationCount: any;
  selectedFile: File = null;
  fd = new FormData();
  rooms: Array<any> = [];
  currentUser: any;
  user_id: any;
  rooms_with_messages: any = {};
  current_room: any;
  chatUser: any;
  roomCreated: boolean;
  roomNotifications: Array<any> = [];
  url: string;

  // TODO: Can probably remove these props
  _roomPrivate = '';
  selectedRoomMember: any;
  messages: Object;
  get roomPrivate(): string {
    return this._roomPrivate;
  }
  set roomPrivate(value: string) {
    this._roomPrivate = value;
  }

  _message = '';
  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = value;
  }

  formImport = new FormGroup({
    userAvatarFileGroup: new FormGroup({
      avatar: new FormControl(''),
    }),
    roomNameGroup: new FormGroup({
      roomName: new FormControl('', [
        Validators.required,
        Validators.maxLength(60)
      ])
    }),
    privateRoomGroup: new FormGroup({
      privateRoom: new FormControl('')
    })
  });

  //
  // ─── CONSTRUCTOR ────────────────────────────────────────────────────────────────
  //
    constructor(private http: HttpClient, private messageService: MessagingService, private authService: AuthService) {

      // this.subscription = this.authService.chatkitUser$.subscribe(
      //   (user) => {
      //     if (user) {
      //       this.chatkitUser = user;
      //       // console.log(this.chatkitUser);
      //       this.rooms = user.rooms;
      //       // console.log(this.rooms);
      //     }
      //   }
      // );

      // this.incomingMessages = this.authService.messages$.subscribe(
      //   (incomingMessage) => {
      //       console.log(incomingMessage.roomId);
      //       console.log(this.rooms_with_messages);

      //     // this.rooms_with_messages.push(incomingMessage);
      //     this.rooms_with_messages[incomingMessage.roomId] = incomingMessage;
      //     console.log(incomingMessage);
      //   }
      // );

      // this.current_room = this.authService.currentRoom$.subscribe(
      //   (currentRoom) => {
      //     this.current_room = currentRoom;
      //     // console.log(currentRoom);
      //   }
      // );
    }
  // ────────────────────────────────────────────────────────────────────────────────



// getMessages(): void {
//   this.messageService.getMessages()
//     .subscribe(messages => this.messages = messages);
// }




  onFileChange(event) {

    if (!(event.target.files && event.target.files[0])) { return; }

    this.selectedFile = <File>event.target.files[0];
    this.fd.append('avatar', this.selectedFile, this.selectedFile.name);
    // this.fileToUpload = file;
    // const reader = new FileReader();
    // reader.readAsDataURL(file); // read file as data url
    // reader.onload = (_event) => {
    //   console.log(reader.result); // log base64 string
    //   this.imagePath = reader.result;
    // };
  }

  //
  // ─── VIEW A USER IN THE ROOM ────────────────────────────────────────────────────
  //

  setSelectedRoomMember(user: any) {
    this.selectedRoomMember = user;
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── SEND A MESSAGE ─────────────────────────────────────────────────────────────
  //
    sendMessage() {
      const { message, currentUser } = this;
      this.chatkitUser.sendMessage({
        text: message,
        roomId: this.current_room.id,
      }).then(res => {
        console.log(res);
        console.log();

      });
      this.message = '';
    }
  // ─────────────────────────────────────────────────────────────────

  // Join a room
  joinRoom(roomID) {
    this.currentUser.joinRoom({roomId: roomID}).then(room => {
      this.current_room = room;
      console.log(this.current_room);

      if (this.rooms_with_messages && this.rooms_with_messages[roomID]) { console.log('returning');
        return; }

      // After joining room, fetch messages
      this.currentUser.fetchMultipartMessages({
        roomId: roomID,
        direction: 'older',
        limit: 10,
      })
        .then(messages => {

        // Check if messages
        if (messages === undefined || messages.length === 0) { return; }

        // Set read cursor
        this.currentUser.setReadCursor({
          roomId: this.current_room.id,
          position: messages[messages.length - 1].id
        })
        .then(() => {
          this.roomNotifications[room.id] = false;
        }); // Remove marker from notifications array
        // .then(() => {
        //     console.log('Set cursor');
        //   })
        //   .catch(err => {
        //     console.log(`Error setting cursor: ${err}`);
        //   });
        messages.forEach(message => {
          // console.log(message.parts[0].payload.content);
          // console.log(message);
          this.rooms_with_messages[message.roomId] = message;
        });
      });
    });

  }
  // end Join room

  // Function => check if user has unread messages in a room
  hasUnread(roomID) {

    let hasUnread = false; // Track return status

    // First, check if cursor exists
    const cursor = this.chatkitUser.readCursor({
      roomId: roomID
    });

    // if read cursor ID !== latest message ID...
    this.chatkitUser.fetchMultipartMessages({ // Get latest message
      roomId: roomID,
      limit: 1,
    })
    .then(messages => {
      if (cursor) { // Has cursor so check cursor pos vs latest message id
        hasUnread = (cursor.position !== messages[0].initialId) ? true : false;
      } else {
        // No cursor => set
      }
    })
    .catch(err => {
      console.log(`Error fetching messages: ${err}`);
    });

    return hasUnread;
  }



  //
  // ─── GET CHATKIT USER ───────────────────────────────────────────────────────────
  //

    getUser(user_id) {
      return this.http.post<any>(`${environment.apiUrl}/chatkit/getuser`, {user_id})
      .toPromise()
      .then(res => {
        return res;
        console.log(res);
      })
      .catch(error => console.log(error));
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
        console.log(res);
        return res;
      })
      .catch(error => console.log(error));
    }
  // ─────────────────────────────────────────────────────────────────



  //
  // ─── SUBSCRIBE TO ROOM ──────────────────────────────────────────────────────────
  //

    // subscribeToRoom(roomID) {

    //   this.current_room = this.chatkitUser.roomStore.rooms[roomID];
    //   this.chatkitUser.subscribeToRoomMultipart({
    //     roomId: roomID,
    //     hooks: {
    //       onMessage: message => {
    //         // When a message is received...

    //         // Push to messages array and update view
    //         this.rooms_with_messages[`${message.roomId}`].push(message);
    //         console.log(this.rooms_with_messages);
    //         // Scroll chat window to reveal latest message
    //         // document.getElementById('chatReel').scrollTop = 0;
    //         // alert(document.getElementById('chatReel'));

    //         // Get the users last cursor position from the room
    //         const cursor = this.chatkitUser.readCursor({
    //           roomId: message.roomId
    //         });

    //         if ((cursor.position !== message.id) && (message.roomId !== this.current_room.id)) {
    //           // If the current user has not seen the message, AND the message was received in a different room,
    //           // add marker to notification array
    //           this.roomNotifications[message.room.id] = true;
    //         } else {
    //           // Otherwise, message was sent in current room, so all we must do is update the
    //           // read cursor for the current user's room
    //           this.chatkitUser.setReadCursor({
    //             roomId: message.roomId,
    //             position: message.id,
    //           });
    //         }

    //         // Count rooms with unread notifucations
    //         let roomsWithNotifications = 0;
    //         this.roomNotifications.forEach(room => {
    //           roomsWithNotifications += room === true ? 1 : 0;
    //         });
    //         // Add to global notification counter
    //         this.messageService.setRoomsWithNotifications(roomsWithNotifications);
    //       },
    //       onAddedToRoom: room => {
    //         console.log(`Added to room ${room.name}`);
    //       }
    //     },
    //     messageLimit: 0 // Only fetch new messages
    //   });
    // }
  // ─────────────────────────────────────────────────────────────────



  //
  // ─── CREATE ROOM ────────────────────────────────────────────────────────────────
  //

    createRoom() { // TODO: Add to message service

      const roomName = this.formImport.value.roomNameGroup.roomName;
      let roomAvatar = '';

      // TODO: Add this to upload service
      // Upload image
      this.http.post(`${environment.apiUrl}/rooms/avatar`, this.fd)
      .toPromise()
      .then( avatar => {
        roomAvatar = avatar['filename']; // Store path
        console.log(roomAvatar);
        // Create the room
        this.chatkitUser.createRoom({ // Create the room
          name: roomName,
          private: false,
          customData: { roomAvatar: roomAvatar }, // Add room avatar to custom room data
        }).then( room => { // Succes
            this.rooms.push(room); // Add the new room to the list
            this.roomCreated = true;
            console.log(room);
            console.log(`Created room called ${room.name}`);
          })
          .catch(err => { // Failed room creation
            console.log(`Error creating room ${err}`);
          });
      });
    }
  // ────────────────────────────────────────────────────────────────────────────────

  // Check if message timestamp is today
  MessageSentToday(msgDate: Date) {

    // get current date
    const currDate = new Date();
    currDate.setDate(currDate.getDate());
    // console.log(currDate);


    // get message date
    msgDate = new Date(msgDate);
    // console.log(msgDate);

    const daysBetween = Math.floor(( Date.parse(currDate.toDateString()) - Date.parse(msgDate.toDateString()) ) / 86400000);

    if (daysBetween >= 7) {
      console.log('Message is at least 7 days old');
    }
    return false;
  }

  ngOnInit() {

    this.authService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
      this.rooms = user.rooms;
      this.current_room = this.messageService.getLatestRoom(user);
      this.messageService.getLatestReadCursor(user);
      console.log(user.rooms);
      console.log(user);
    });
  }

  ngAfterViewInit() {

    this.chatReel.changes.subscribe(c => {
      c.toArray().forEach(item => {
        item.nativeElement.offsetParent.scrollTop = item.nativeElement.offsetParent.scrollHeight;
      });
    });
  }
}
