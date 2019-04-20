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
    constructor(private http: HttpClient, private messageService: MessagingService, private authService: AuthService) {}
  // ────────────────────────────────────────────────────────────────────────────────



  onFileChange(event) {

    if (!(event.target.files && event.target.files[0])) { return; }

    this.selectedFile = <File>event.target.files[0];
    this.fd.append('avatar', this.selectedFile, this.selectedFile.name);
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



  //
  // ─── JOIN A ROOM ────────────────────────────────────────────────────────────────
  //

    joinRoom(roomID) {

      this.messageService.joinRoom(this.currentUser, roomID).then((room) => {

        // update current room
        this.current_room = room;
      });

    }
  // ────────────────────────────────────────────────────────────────────────────────



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



  //
  // ─── CHECK IF MESSAGE TIMESTAMP IS TODAY ────────────────────────────────────────
  //

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
  // ────────────────────────────────────────────────────────────────────────────────


  ngOnInit() {

    this.authService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
      this.rooms = user.rooms;
      this.current_room = this.messageService.getLatestRoom(user);
      console.log(this.current_room);

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
