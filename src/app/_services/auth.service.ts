import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }



  // Handle user login
  login(username: string, password: string) {

    //   return this.http.post<any>(`${environment.apiUrl}/okta/login`, JSON.stringify(logindetails))
    //   .pipe(map(user => {
    //       return user;
    //   }));

    return this.http.post<any>(`${environment.apiUrl}/okta/login`, { username, password })
        .pipe(map(user => {
            console.log(user);
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        }));
}

logout() {
    // TODO: Add logout function to authentication API - this is fine for now
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}
}
