import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MessagingService } from '../_services/messaging.service';
import bsCustomFileInput from 'bs-custom-file-input';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  @ViewChild('labelImport')
  labelImport: ElementRef;
  fileToUpload: File = null;

  rooms: any;
  currentUser: any;
  user_id: any;
  room_messages: Array<any> = [];
  // room_messages: Observable<any[]>;
  current_room: any;
  chatUser: any;

  _message = '';
  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = value;
  }

  // _roomName = '';
  // get roomName(): string {
  //   return this._roomName;
  // }
  // set roomName(value: string) {
  //   this._roomName = value;
  // }

  _roomPrivate = '';
  get roomPrivate(): string {
    return this._roomPrivate;
  }
  set roomPrivate(value: string) {
    this._roomPrivate = value;
  }

  formImport = new FormGroup({
    importFileGroup: new FormGroup({
      importFile: new FormControl(''),
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

  constructor(private http: HttpClient, private msgService: MessagingService) {}

  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.fileToUpload = files.item(0);
  }

  // Send a message
  sendMessage() {
    const { message, currentUser } = this;
    this.msgService.chatkitUser.sendMessage({
      text: message,
      roomId: this.current_room.id,
    }).then(res => {
      console.log(res);
    });
    this.message = '';
  }

  // Join a room
  joinRoom(roomID) {
    this.msgService.joinRoom(roomID).then(room => {
      this.current_room = room;
    });

    this.msgService.fetchMessages(roomID).then(messages => {
      messages.forEach(message => {
        console.log(message.parts[0].payload.content);
      });
      this.room_messages = messages;
    });
  }

  // Get Chatkit user
  getUser(user_id) {
    return this.http.post<any>(`${environment.apiUrl}/chatkit/getuser`, {user_id})
    .toPromise()
    .then(res => {
      return res;
      console.log(res);
    })
    .catch(error => console.log(error));
  }

  // Get Chatkit user's rooms
  getUserRooms(user_id) {
    return this.http.post<any>(`${environment.apiUrl}/chatkit/getuserrooms`, {user_id})
    .toPromise()
    .then(res => {
      // this.rooms = res;
      return res;
      console.log(res);
    })
    .catch(error => console.log(error));
  }

  subscribeToRoom(roomID) {
    this.msgService.chatkitUser.subscribeToRoomMultipart({
      roomId: roomID,
      hooks: {
        onMessage: message => { // When a message is received...
          if (message.roomId === this.current_room.id) { // Was the message sent in the current room?
            // Yes -> push to chat window
            console.log('Message received in current room.');
          } else {
            // No -> Add notification marker to respective room card
            console.log('Message received in different room.');
          }
          console.log('received message', message);
          console.log(`Room ID: ${message.roomId}`);
          console.log(`Current Room ID: ${this.current_room.id}`);
          // Display message in chat window when message received
          this.room_messages.push(message);
          // this.room_messages.message;
        }
      },
      messageLimit: 10
    });
  }

  // Create room
  createRoom() {
    console.log(this.formImport.value);
    // this.msgService.chatkitUser.createRoom({
    //   name: 'general',
    //   private: true,
    //   addUserIds: ['craig', 'kate'],
    //   customData: { foo: 42 },
    // }).then(room => {
    //   console.log(`Created room called ${room.name}`);
    // })
    // .catch(err => {
    //   console.log(`Error creating room ${err}`);
    // });
  }


  ngOnInit() {
    // Get user id from local storage
    const user_id = JSON.parse(localStorage.getItem('currentUser'))._embedded.user.id;

    // Get chatkit user
    this.getUser(user_id).then(user => {
      this.currentUser = user;
      this.user_id = user.id;

      // Get chatkit user rooms
      this.getUserRooms(user.id).then(rooms => {
        this.rooms = rooms;

        // Join first room in array
        // TODO: refactor this implementation
        this.msgService.joinRoom(this.rooms[0].id).then(room => {
          this.current_room = room;

          // Fetch all messages for joined room
          this.msgService.fetchMessages(this.rooms[0].id).then(messages => {
            messages.forEach(message => {
              console.log(message.parts[0].payload.content);
            });
            this.room_messages = messages;
          });
        });

        // Iterate through rooms and subscribe to each
        this.rooms.forEach(room => {
          this.subscribeToRoom(room.id);
        });
      });
    });
  }
}
