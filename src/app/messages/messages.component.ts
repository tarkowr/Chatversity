import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MessagingService } from '../_services/messaging.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  rooms: any;
  currentUser: any;
  user_id: any;
  room_messages: any;
  current_room: any;

  _message = '';
  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = value;
  }

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

  constructor(private http: HttpClient, private msgService: MessagingService) {}

  // Join a room
  public joinRoom(roomID) {
    this.msgService.joinRoom(roomID).then(room => {
      this.current_room = room;
    }); // Join
    this.msgService.fetchMessages(roomID).then(messages => {
      messages.forEach(message => {
        console.log(message.parts[0].payload.content);
      });
      this.room_messages = messages;
    }); // Get messages
    // TODO: Display fetched messages in chat window
  }


  // Send a message
  // sendMessage() {
  //   // console.log(this, $scope)
  //   // const asdf = this;
  //   const {current_room, _message} = this;
  //   this.msgService.sendMessage(current_room, _message);
  // }


  // Get Chatkit user
  getUser(user_id) {
    this.http.post<any>(`${environment.apiUrl}/chatkit/getuser`, {user_id})
    .toPromise()
    .then(res => {
      this.currentUser = res;
      this.user_id = res.id;
      console.log(res);
    })
    .catch(error => console.log(error));
  }

  // Get Chatkit user's rooms
  getUserRooms(user_id) {
    this.http.post<any>(`${environment.apiUrl}/chatkit/getuserrooms`, {user_id})
    .toPromise()
    .then(res => {
      this.rooms = res;
      console.log(res);
    })
    .catch(error => console.log(error));
  }


  ngOnInit() {
    const user_id = JSON.parse(localStorage.getItem('currentUser'))._embedded.user.id;
    this.getUser(user_id);
    this.getUserRooms(user_id);
  }

  // Get User ID
    // TODO: Refactor => Add to user service
    // const user_id = JSON.parse(localStorage.getItem('currentUser'))._embedded.user.id;
    // this.user_id = user_id;
    // console.log(`User ID: ${user_id}`);
  // Get all of the current user's rooms
  // this.rooms = return this.http.post<arr>(`${environment.apiUrl}/chatkit/GetUserRooms`, {user_id})
  // .pipe(map(res => {
  //   res.json();
  // }));
}
