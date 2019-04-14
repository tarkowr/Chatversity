import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable, BehaviorSubject, } from 'rxjs';
import { User } from '../_models/user';

@Injectable()
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


    //
    // ─── SEND SIGN UP REQUEST TO SERVER ─────────────────────────────────────────────
    //

    signup(fname: string, lname: string, university: string, username: string, password: string) {
        console.log(fname, lname, university, username, password);

        return this.http.post<any>(`${environment.apiUrl}/okta/signup`, { fname, lname, username, password })
        .pipe(switchMap(user => {
            const user_id = user._embedded.user.id;
            console.log(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return this.http.post(`${environment.apiUrl}/chatkit/createtoken`, {user_id});
        }))
        .pipe(map(data => {
            console.log(data);
            localStorage.setItem('chatkitToken', JSON.stringify(data));
            return data;
        }));
    }
    // ─────────────────────────────────────────────────────────────────



    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/okta/login`, { username, password })
        .pipe(switchMap(user => {
            const user_id = user._embedded.user.id;
            console.log(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return this.http.post(`${environment.apiUrl}/chatkit/createtoken`, {user_id});
        }))
        .pipe(map(data => {
            console.log(data);
            localStorage.setItem('chatkitToken', JSON.stringify(data));
            return data;
        }));
    }

    logout() {
        // TODO: Add logout function to authentication API - this is fine for now
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
