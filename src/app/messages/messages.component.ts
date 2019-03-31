import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MessagingService } from '../_services/messaging.service';
import bsCustomFileInput from 'bs-custom-file-input';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  @ViewChild('avatar') avatar: ElementRef;
  fileToUpload: File;

  imagePath: any;

  rooms: any;
  currentUser: any;
  user_id: any;
  room_messages: Array<any> = [];
  // room_messages: Observable<any[]>;
  current_room: any;
  chatUser: any;

  _message = '';
  chatkitUser: any;
  roomCreated: boolean;
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

  // TODO: Can probably remove these props
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

  url: string;
  onFileChange(event) {
    if (!(event.target.files && event.target.files[0])) { return; }
    const file = event.target.files[0];
    this.fileToUpload = file;
    const reader = new FileReader();
    reader.readAsDataURL(file); // read file as data url
    reader.onload = (_event) => {
      console.log(reader.result); // log base64 string
      this.imagePath = reader.result;
    };
    // this.fileToUpload = reader.result;
    // this.labelImport.nativeElement.innerText = Array.from(files)
    //   .map(f => f.name)
    //   .join(', ');
    // this.fileToUpload = files.item(0);

    // if (event.target.files.length > 0) {
    //   console.log('have a file');
    //   this.fileToUpload = event.target.files[0];
    //   console.log(this.fileToUpload);
    //   // this.formImport.get(['importFileGroup', 'importFile']).setValue(file);
    // }
  }

  // Send a message
  sendMessage() {
    const { message, currentUser } = this;
    this.chatkitUser.sendMessage({
      text: message,
      roomId: this.current_room.id,
    }).then(res => {
      console.log(res);
    });
    this.message = '';
  }

  // Join a room
  joinRoom(roomID) {
    this.chatkitUser.joinRoom({roomId: roomID}).then(room => {
      this.current_room = room;
      console.log(room);
    });

    this.chatkitUser.fetchMultipartMessages({roomId: roomID}).then(messages => {
      messages.forEach(message => {
        // console.log(message.parts[0].payload.content);
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
      console.log(res);
      return res;
    })
    .catch(error => console.log(error));
  }

  subscribeToRoom(roomID) {
    this.chatkitUser.subscribeToRoomMultipart({
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
        },
        onAddedToRoom: room => {
          console.log(`Added to room ${room.name}`);
        }
      },
      messageLimit: 10
    });
  }

  // Create room
  createRoom() {
    this.roomCreated = true; return;
    // this.isLoading = true; // Display loading icon
    const roomName = this.formImport.value.roomNameGroup.roomName;
    const privateRoom = this.formImport.value.privateRoomGroup.privateRoom;
    const roomAvatar = this.formImport.value.importFileGroup.importFile;
    console.log(this.formImport.value.roomNameGroup.roomName);
    console.log(this.formImport.value.privateRoomGroup.privateRoom);
    console.log(this.formImport.value.importFileGroup.importFile);

    console.log(this.fileToUpload);
    console.log(this.formImport.value);

    const formData = new FormData();
    const b64string = JSON.stringify(this.imagePath);

    formData.append('file', b64string);
    formData.append('testvar', 'my test var value');

    console.log(formData);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');

    // Create room and insert room avatar into database
    this.http.post(`${environment.apiUrl}/asdf`, formData)
    .toPromise()
    .then(res => { // Image uploaded
      console.log(res);

      console.log('Image uploaded');
      this.chatkitUser.createRoom({ // Create the room
        name: roomName,
        private: true,
        customData: { roomAvatar: res['_id'] },
      }).then(room => { // Success
        // this.isLoading = false;
        this.roomCreated = true;
        console.log(`Created room called ${room.name}`);
      })
      .catch(err => { // Failed room creation
        console.log(`Error creating room ${err}`);
      });
    })
    .catch(err => { // Failed image upload
      console.log('Error uploading room image');
    });
  }


  ngOnInit() {

    // TODO: Add this to an addUser function - only call when necessary
    this.msgService.chatManager
    .connect()
    .then(user => {
      console.log('Connected as user ', user);
      this.chatkitUser = user;
      this.rooms = user.rooms;

      // Iterate through rooms and subscribe to each
      this.rooms.forEach(room => {
        this.subscribeToRoom(room.id);
      });

      // Join first room in array
      // TODO: refactor this implementation
      this.chatkitUser.joinRoom({roomId: this.rooms[0].id}).then(room => {
        this.current_room = room;

        // Fetch all messages for joined room
        this.chatkitUser.fetchMultipartMessages({
          roomId: this.rooms[0].id,
          limit: 10,
        }).then(messages => {
          messages.forEach(message => {
            console.log(message.parts[0].payload.content);
          });
          this.room_messages = messages;
        });
      });
    })
    .catch(error => {
      console.error('error:', error);
    });

    // Get user id from local storage
    const user_id = JSON.parse(localStorage.getItem('currentUser'))._embedded.user.id;
  }
}
