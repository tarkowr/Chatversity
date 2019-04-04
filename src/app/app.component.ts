import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { AuthService } from './Core/_services/auth.service';
import { User } from './Core/_models/user';
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

  // Logout user
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  // For testing only, use this function to remove the navbar on pages that do not need it
  RemoveNavbarForTesting(){
    if(this.router.url == '/login' || this.router.url == '/signup' || this.router.url == '/forgot' || this.router.url == '/new-user' || this.router.url == '/404'){
      return false;
    }

    return true;
  }
}
