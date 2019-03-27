import { Component, OnInit } from '@angular/core';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import Chatkit from '@pusher/chatkit-client';
import { Observable } from 'rxjs';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

      messages = [];
      users = [];
      rooms = [];
      currentUser: any;
      user_id: any;

      _username = '';
      get username(): string {
        return this._username;
      }
      set username(value: string) {
        this._username = value;
      }

      _message = '';
      get message(): string {
        return this._message;
      }
      set message(value: string) {
        this._message = value;
      }

      sendMessage() {
        const { message, currentUser } = this;
        currentUser.sendMessage({
          text: message,
          roomId: '<your room id>',
        });
        this.message = '';
      }

  constructor(private http: HttpClient) {

    // Get User ID
    // TODO: Refactor => Add to user service
    const user_id = JSON.parse(localStorage.getItem('currentUser'))._embedded.user.id;
    this.user_id = user_id;
    console.log(user_id);

    // Get Chatkit user
    this.http.post(`${environment.apiUrl}/chatkit/getuser`, {user_id}).subscribe(user => {
      this.currentUser = user;
    });

    // Get all of the current user's rooms
    this.http.post(`${environment.apiUrl}/chatkit/GetUserRooms`, {user_id}).subscribe(rooms => {
      this.rooms.push(rooms);
      console.log(rooms);
    });

    console.log(this.rooms);
  }

  ngOnInit() {
    // pipe(map(user => {
    //   this.currentUser = user;
    //   console.log('user: ');
    //   console.log(user);
    // }));

    // return chatManager.connect()
    // .then(currentUser => {
    //   this.currentUser = currentUser;
    //   console.log('Successful connection', currentUser);
    // })
    // .catch(err => {
    //   console.log('Error on connection', err);
    // });
  }

}
