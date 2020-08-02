import { Injectable, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { BehaviorSubject, Subject, ReplaySubject, Observable, } from 'rxjs'
import { MessagingService } from './messaging.service'
import { Router } from '@angular/router'
import { reject } from 'q'

@Injectable()
export class AuthService {
    private clientLocalStorageKey: string
    private _currentUser: ReplaySubject<any>

    constructor(private http: HttpClient, private messageService: MessagingService, private router: Router ) {
        this.clientLocalStorageKey = 'chatkitUserId'
        this._currentUser = new ReplaySubject<any>(1)
        this.initializeApp()
    }

    get currentUser() {
        return this._currentUser.asObservable()
    }

    set currentUser(user: any) {
        this._currentUser.next(user)
    }

    getCurrentUser(): Observable<any> {
        return this._currentUser.asObservable()
    }

    getUserId() {
        return localStorage.getItem(this.clientLocalStorageKey)
    }

    initializeApp() {
        const clientId = localStorage.getItem(this.clientLocalStorageKey)

        if (!clientId) { return }

        this.messageService.initChatkit(clientId)
        .then(chatkitUser => {
            localStorage.setItem('chatkitUser', chatkitUser)
            this._currentUser.next(chatkitUser)
        })
    }

    userLoggedIn() {
        return localStorage.getItem(this.clientLocalStorageKey) != null
    }


    //
    // ─── SEND SIGN UP REQUEST TO SERVER ─────────────────────────────────────────────
    //

    signup(fname: string, lname: string, university: string, username: string, password: string) {
        // Create Okta User
        return this.http.post<any>(`${environment.apiUrl}/okta/signup`, { fname, lname, username, password })
        .toPromise()
        .then(user => {
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
                // Login user after signup
                return this.login(username, password).then(loggedinUser => {
                    return loggedinUser
                })
            })
        })
        .catch(err => {
            return reject(err)
        })
    }
    // ─────────────────────────────────────────────────────────────────


    //
    // ─── VALIDATE LOGIN THROUGH OKTA ────────────────────────────────────────────────
    //

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/okta/login`, { username, password })
        .toPromise()
        .then((user) => { // logged in okta user
            // localStorage.setItem('OktaUser', JSON.stringify(user))

            return this.messageService.initChatkit(user._embedded.user.id)
            .then(chatkitUser => {
                this.currentUser = chatkitUser
                return chatkitUser
            })
        })
    }
    // ─────────────────────────────────────────────────────────────────


    //
    // ─── HANDLE LOGOUT ──────────────────────────────────────────────────────────────
    //

    logout() {
        this.messageService.disconnect()
        localStorage.clear()
        this.router.navigate(['/login'])
        console.clear()
    }
    // ─────────────────────────────────────────────────────────────────

}
