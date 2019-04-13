import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    //
    // ─── GET ALL CONNECTIONS FOR A GIVEN USER ───────────────────────────────────────────────────
    //

        getConnections(id: number) {
            return this.http.get(`${environment.apiUrl}/chatkit/connections/${id}`);
        }
    // ────────────────────────────────────────────────────────────────────────────────


    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/okta/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.apiUrl}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/okta/users/` + id);
    }
}
