import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { AuthService } from './_services/auth.service';
import { User } from './_models/user';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentUser: User;
  title = 'Chatversity';
  // tslint:disable-next-line:no-inferrable-types
  update: boolean = false;

  constructor(
      private router: Router,
      private authenticationService: AuthService,
      updates: SwUpdate
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      updates.available.subscribe(event => {
        this.update = true;
      });
  }

  ngOnInit() {
    console.log(this.currentUser);
  }


  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}
