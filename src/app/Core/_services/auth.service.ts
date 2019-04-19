import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { BehaviorSubject, Subject, ReplaySubject, } from 'rxjs';
import { MessagingService } from './messaging.service';
import {parse, stringify} from 'flatted';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    private _currentUser;

    constructor(private http: HttpClient, private messageService: MessagingService, private router: Router ) {}

    get currentUser() {
        return this._currentUser;
    }

    set currentUser(user: any) {
        this._currentUser = user;
    }



    async initializeApp() {
        if (this.userLoggedIn()) {
            this.currentUser = await this.messageService.initChatkit(localStorage.getItem('chatkitUserId'))
            .then(chatkitUser => {
                console.log('setting chatkit user');
                this._currentUser = chatkitUser;
                return chatkitUser;
            });
        }
    }



    userLoggedIn() {
        console.log(localStorage.getItem('chatkitUserId') != null);
        return localStorage.getItem('chatkitUserId') != null;
    }



    //
    // ─── SEND SIGN UP REQUEST TO SERVER ─────────────────────────────────────────────
    //

        signup(fname: string, lname: string, university: string, username: string, password: string) {
            // Create Okta User
            return this.http.post<any>(`${environment.apiUrl}/okta/signup`, { fname, lname, username, password })
            .toPromise()
            .then(user => {
                // console.log(user);
                // Create chatkit user from Okta User ID
                return this.http.post(`${environment.apiUrl}/chatkit/createuser`, {
                    id: user.id,
                    name: user.profile.firstName + ' ' + user.profile.lastName,
                    custom_data: {
                        connections: [],
                        connectionRequests: [],
                        bio: '',
                        university: university,
                        graduationYear: '',
                        interests: '',
                        clubs: '',
                        major: '',
                        privateAccount: false,
                        showActivityStatus: true,
                    }
            })
            .toPromise()
            .then((chatkitUser) => {
                    // Created Chatkit user
                    // console.log('Created Chatkit user!');
                    console.log(chatkitUser);

                    return this.login(username, password).then(loggedinUser => {
                        return loggedinUser;
                    });
                });
            });
        }
    // ─────────────────────────────────────────────────────────────────



    //
    // ─── VALIDATE LOGIN THROUGH OKTA ────────────────────────────────────────────────
    //

        login(username: string, password: string) {
            return this.http.post<any>(`${environment.apiUrl}/okta/login`, { username, password })
            .toPromise()
            .then((user) => {

                console.log('LOGGED IN OKTA USER: ', user);

                localStorage.setItem('OktaUser', JSON.stringify(user));

                return user;
            });
        }
    // ─────────────────────────────────────────────────────────────────



    //
    // ─── HANDLE LOGOUT ──────────────────────────────────────────────────────────────
    //

        logout() {
            localStorage.clear();
            this.router.navigate(['/login']);
            console.clear();
        }
    // ─────────────────────────────────────────────────────────────────

}
