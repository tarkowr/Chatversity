// callback.component.ts

// tslint:disable-next-line:max-line-length
/* In order to handle the redirect back from Okta, we need to capture the token values from the URL. Use the /callback route to handle the logic of storing these tokens and redirecting back to the main page. */

import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({ template: `` })
export class CallbackComponent {

  constructor(private okta: OktaAuthService) {
    // Handles the response from Okta and parses tokens
    okta.handleAuthentication();
  }
}
