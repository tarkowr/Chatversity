import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    //
    // ─── GET A UI AVATAR ────────────────────────────────────────────────────────────
    //

    getUiAvatar() {
        return this.http.get(`${environment.apiUrl}/uiavatar`)
    }
    // ────────────────────────────────────────────────────────────────────────────────


    //
    // ─── GET ALL CONNECTIONS FOR A GIVEN USER ───────────────────────────────────────────────────
    //

    getConnections(id: number) {
        return this.http.get(`${environment.apiUrl}/chatkit/connections/${id}`)
    }
    // ────────────────────────────────────────────────────────────────────────────────


    //
    // ─── UPDATE USER ──────────────────────────────────────────────────────────────
    //

    update(userId, data) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        })
        return this.http.post(`${environment.apiUrl}/chatkit/user/${userId}`, data, {headers: headers})
    }
    // ─────────────────────────────────────────────────────────────────


    //
    // ─── GET ALL USERS ───────────────────────────────────────
    //

    getAll() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        })
        return this.http.get<any[]>(`${environment.apiUrl}/chatkit/users`)
    }
    // ────────────────────────────────────────────────────────────────────────────────


    //
    // ─── GET OKTA USER BY ID ───────────────────────────────────────
    //

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/okta/users/` + id)
    }
    // ────────────────────────────────────────────────────────────────────────────────


    //
    // ─── REGISTER OKTA USER ───────────────────────────────────────
    //

    register(user: any) {
        return this.http.post(`${environment.apiUrl}/users/register`, user)
    }
    // ────────────────────────────────────────────────────────────────────────────────


    //
    // ─── DELETE OKTA USER ───────────────────────────────────────
    //

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/okta/users/` + id)
    }
    // ────────────────────────────────────────────────────────────────────────────────
}
