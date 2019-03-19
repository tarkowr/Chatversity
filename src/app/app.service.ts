// app.service.ts

/* Whenever a user attempts to access a route that
is protected by OktaAuthGuard, it first checks to
see if the user has been authenticated.
If isAuthenticated() returns false, start the login flow. */


import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as OktaAuth from '@okta/okta-angular';

@Injectable()
export class OktaAuthService {

  oktaAuth = new OktaAuth({
    url: 'https://dev-117825.okta.com',
    clientId: '{clientId}',
    issuer: 'https://dev-117825.okta.com/oauth2/{authServerId}',
    redirectUri: 'http://localhost:4200/callback',
  });

  constructor(private router: Router) {}

  async isAuthenticated() {
    // Checks if there is a current accessToken in the TokenManger.
    return !!(await this.oktaAuth.tokenManager.get('accessToken'));
  }

  login() {
    // Launches the login redirect.
    this.oktaAuth.token.getWithRedirect({
      responseType: ['id_token', 'token'],
      scopes: ['openid', 'email', 'profile']
    });
  }

  async handleAuthentication() {
    const tokens = await this.oktaAuth.token.parseFromUrl();
    tokens.forEach(token => {
      if (token.idToken) {
        this.oktaAuth.tokenManager.add('idToken', token);
      }
      if (token.accessToken) {
        this.oktaAuth.tokenManager.add('accessToken', token);
      }
    });
  }

  async logout() {
    this.oktaAuth.tokenManager.clear();
    await this.oktaAuth.signOut();
  }
}
