import { Injectable, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { User } from '../_models/user';


@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  currentUser: any;
  chatManager: any;
  chatkitUser: any;

  constructor( private authenticationService: AuthService) {

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    this.chatManager = new ChatManager({
      instanceLocator: 'v1:us1:a54bdf12-93d6-46f9-be3b-bfa837917fb5',
      userId: this.currentUser._embedded.user.id,
      tokenProvider: new TokenProvider({
        url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a54bdf12-93d6-46f9-be3b-bfa837917fb5/token'
      })
    });

    this.chatManager
    .connect()
    .then(currentUser => {
      this.chatkitUser = currentUser;
      console.log('Connected as user ', currentUser);
    })
    .catch(error => {
      console.error('error:', error);
    });
  }

  logUser() {
    console.log(this.currentUser);
  }

  joinRoom(roomID) {
    this.chatkitUser.joinRoom( { roomId: roomID } )
    .then(room => {
      console.log(`Joined room with ID: ${room.id}`);
    })
    .catch(err => {
      console.log(`Error joining room ${roomID}: ${err}`);
    });
  }
}
