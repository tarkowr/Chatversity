import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { BehaviorSubject, Subject, } from 'rxjs';
import { User } from '../_models/user';
import { MessagingService } from './messaging.service';
import {parse, stringify} from 'flatted';

@Injectable()
export class AuthService implements OnInit {

    private currentRoom: any = new Subject();
    public currentRoom$ = this.currentRoom.asObservable();

    private messages: any = new Subject();
    public messages$ = this.messages.asObservable();

    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: any;
    chatManager: any;

    private user: any = new Subject();
    public user$ = this.user.asObservable();

    constructor(private http: HttpClient, private _msgService: MessagingService ) {

        this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();

        // const chatkitUser = localStorage.getItem('chatkitUser');
        // if (chatkitUser !== null) {
        //     console.log(parse(chatkitUser));
        // }
        console.log('auth service constructed');

        this.user = new BehaviorSubject(localStorage.getItem('chatkitUserId'));
        this.user$ = this.user.asObservable();

        this.user$.subscribe((x) => {
            if (localStorage.getItem('chatkitUser') === null) {
                this.initChatkit(x);
            }
        });


        // this.initChatkit(localStorage.getItem('chatkitUserId'));

        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

    // Handle circular JSON structure returned from chatkit (=
    getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
          if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
              return;
            }
            seen.add(value);
          }
          return value;
        };
    }

    public get userValue() {
        return this.user;
    }

    public set setUser(user) { this.user.next(user); }

    // public get chatkitUserValue() {
    //     return this.chatUserSubject.value;
    // }

    //
    // ─── SEND SIGN UP REQUEST TO SERVER ─────────────────────────────────────────────
    //

        signup(fname: string, lname: string, university: string, username: string, password: string) {
            console.log(fname, lname, university, username, password);

            return this.http.post<any>(`${environment.apiUrl}/okta/signup`, { fname, lname, username, password })
            .toPromise()
            .then((user) => {
                const user_id = user._embedded.user.id;
                console.log(user);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                this.http.post(`${environment.apiUrl}/chatkit/createtoken`, {user_id})
                .toPromise()
                .then((token) => {
                    console.log(token);
                localStorage.setItem('chatkitToken', JSON.stringify(token));
                return token;
                });
            });
        }
    // ─────────────────────────────────────────────────────────────────


    initChatkit(userId) {
        this.chatManager = new ChatManager({
            instanceLocator: 'v1:us1:a54bdf12-93d6-46f9-be3b-bfa837917fb5',
            userId: userId,
            tokenProvider: new TokenProvider({
              url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a54bdf12-93d6-46f9-be3b-bfa837917fb5/token'
            })
          });

          return this.chatManager.connect().then(user => {
              localStorage.setItem('chatkitUser', stringify(user));
            console.log(user);
            user.joinRoom({ roomId: user.rooms[0].id })
            .then(room => {
                this.currentRoom.next(room);
                console.log(`Joined room with ID: ${room.id}`);
            })
            .catch((err, room) => {
              console.log(`Error joining room ${room.id}: ${err}`);
            });

            user.rooms.forEach(room => {
                user.subscribeToRoomMultipart({
                    roomId: room.id,
                    hooks: {
                        onMessage: message => {
                            this.messages.next(message);
                            // console.log('Received message:', message);
                        }
                    }
                });
            });

            return user;
          });
    }

    //
    // ─── VALIDATE LOGIN THROUGH OKTA ────────────────────────────────────────────────
    //

        login(username: string, password: string) {
            return this.http.post<any>(`${environment.apiUrl}/okta/login`, { username, password })
            .toPromise()
            .then((user) => {
                const user_id = user._embedded.user.id;
                this.currentUser = user;
                console.log(user);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                localStorage.setItem('chatkitUserId', user._embedded.user.id);
                this.user.next(user._embedded.user.id);

                // this.initChatkit(user._embedded.user.id)
                // .then(data => {
                //     console.log(data);
                //     localStorage.setItem('chatkitUser', stringify(data));
                //     localStorage.setItem('chatkitUserId', data.id);
                //     // console.log(parse(localStorage.getItem('chatkitUser')));
                //     this.user.next(data);
                // });

                // this.currentUserSubject.next(user);
                // this.http.post(`${environment.apiUrl}/chatkit/createtoken`, {user_id})
                // .toPromise()
                // .then((token) => {
                //     console.log(token);
                //     localStorage.setItem('chatkitToken', JSON.stringify(token));
                //     this.currentUserSubject.next(user);
                // });
                return user;
            });
        }
    // ─────────────────────────────────────────────────────────────────



    //
    // ─── HANDLE LOGOUT ──────────────────────────────────────────────────────────────
    //

        logout() {
            // TODO: Add logout function to authentication API - this is fine for now
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
        }
    // ─────────────────────────────────────────────────────────────────

    ngOnInit() {
        console.log(this.currentUserSubject.value);
    }
}
