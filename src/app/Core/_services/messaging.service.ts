import { Injectable, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { User } from '../_models/user';
import { BehaviorSubject, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { RoomsComponent } from '~/app/rooms/rooms.component';


@Injectable({
  providedIn: 'root'
})
export class MessagingService {



  chatManager: any;
  currentUser: any;
  latestRoom: any;
  messages: Array<any> = [];
  constructor(private http: HttpClient) { console.log('Messaging service constructed'); }



  // enterLatestRoom(user) {
  //   user.joinRoom({roomId:});
  // }

  getLatestRoom(user) {
    return user.rooms[0];
  }


  joinRoom(id: any) {

  return this.currentUser.joinRoom({roomId: id})
      .then(room => {
        console.log(`Joined room with ID: ${room.id}`);
        this.latestRoom = room;
        return room;
      })
      .catch(err => {
        console.log(`Error joining room ${id}: ${err}`);
      });
  }



  subscribeToAllRooms() {

    const currentUser = this.currentUser;

    if (! currentUser.rooms.length) { return; }

    currentUser.rooms.forEach(room => {
      currentUser.subscribeToRoomMultipart({
          roomId: room.id,
          hooks: {
              onMessage: message => {
                // console.log('Received message', message);
                this.messages.push(message);
              }
          },
          messageLimit: 10
      });
    });
  }



  initChatkit(userId) {

    this.chatManager = new ChatManager({
      instanceLocator: 'v1:us1:a54bdf12-93d6-46f9-be3b-bfa837917fb5',
      userId: userId,
      tokenProvider: new TokenProvider({
        url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a54bdf12-93d6-46f9-be3b-bfa837917fb5/token'
      })
    });

    return this.chatManager.connect({
      onAddedToRoom: room => {
        console.log(`Added to room ${room.name}`);
      },
      onRemovedFromRoom: room => {
        console.log(`Removed from room ${room.name}`);
      },
      onRoomUpdated: room => {
        console.log(`Updated room ${room.name}`);
      },
      onRoomDeleted: room => {
        console.log(`Deleted room ${room.name}`);
      }
    })
      .then(user => {

        console.log(`Connected as ${user.name}. \n Setting up rooms...`);

        this.currentUser = user;

        localStorage.setItem('chatkitUserId', user.id);


        // If user has no rooms then return
        if (!user.rooms.length) { return; }


        // Subscribe to all user rooms to be notified of new messages
        this.subscribeToAllRooms();

        // TODO: Join the room with most recent read cursor
        // Join the latest room
        this.joinRoom(user.rooms[0].id);

        return user;
      });
  }



  getMessages() {
  return this.http.get('');
  }
}
