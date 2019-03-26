import { Component, OnInit } from '@angular/core';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import Chatkit from '@pusher/chatkit-client';
import { Observable } from 'rxjs';
import axios from 'axios';

const chatManager = new Chatkit.ChatManager({
  instanceLocator: 'v1:us1:a54bdf12-93d6-46f9-be3b-bfa837917fb5',
  userId: 'testuser1',
  tokenProvider: new Chatkit.TokenProvider({
    url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a54bdf12-93d6-46f9-be3b-bfa837917fb5/token'
  })
});

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages = [];
      users = [];
      currentUser: any;

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

      addUser() {
        const { username } = this;
        axios.post('http://localhost:5200/users', { username })
          .then(() => {
            // const tokenProvider = new Chatkit.TokenProvider({
            //   url: 'http://localhost:5200/authenticate'
            // });

            // const chatManager = new Chatkit.ChatManager({
            //   instanceLocator: '<your instance locator>',
            //   userId: username,
            //   tokenProvider
            // });

            return chatManager
              .connect()
              .then(currentUser => {
                currentUser.subscribeToRoom({
                  roomId: '<your room id>',
                  messageLimit: 100,
                  hooks: {
                    onMessage: message => {
                      this.messages.push(message);
                    },
                    onPresenceChanged: (state, user) => {
                      this.users = currentUser.users.sort((a, b) => {
                        if (a.presence.state === 'online') {
                          return -1;
                        }
                        return 1;
                      });
                    },
                  },
                });

                this.currentUser = currentUser;
                this.users = currentUser.users;
              });
          })
            .catch(error => console.error(error));
      }

  constructor() { }

  ngOnInit() {
  return chatManager.connect()
  .then(currentUser => {
    this.currentUser = currentUser;
    console.log('Successful connection', currentUser);
  })
  .catch(err => {
    console.log('Error on connection', err);
  });
  }

}
