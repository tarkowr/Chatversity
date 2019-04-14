import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, } from 'rxjs';
import { User } from '../_models/user';

@Injectable()
export class AuthService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: any;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    public get currentUserValue() {
        return this.currentUser;
    }

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
                // this.currentUserSubject.next(user);
                this.http.post(`${environment.apiUrl}/chatkit/createtoken`, {user_id})
                .toPromise()
                .then((token) => {
                    console.log(token);
                localStorage.setItem('chatkitToken', JSON.stringify(token));
                this.currentUserSubject.next(user);
                return token;
                });
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
}
