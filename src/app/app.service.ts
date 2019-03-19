// app.service.ts

/* Whenever a user attempts to access a route that
is protected by OktaAuthGuard, it first checks to
see if the user has been authenticated.
If isAuthenticated() returns false, start the login flow. */


import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as OktaAuth from '@okta/okta-angular';

@Injectable()
export class OktaAuthService {}
