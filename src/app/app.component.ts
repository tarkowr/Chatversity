import { Component, OnInit } from '@angular/core';
import { AuthService } from './Core/_services/auth.service';
import { User } from './Core/_models/user';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { MessagingService } from './Core/_services/messaging.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  currentUser: any;
  title = 'Chatversity';
  // tslint:disable-next-line:no-inferrable-types
  update: boolean = false;
  currUser: any;

  constructor(
      private router: Router,
      private authenticationService: AuthService,
      private updates: SwUpdate,
      private messagingService: MessagingService
  ) {}

  //
  // ─── LOGOUT USER ────────────────────────────────────────────────────────────────
  //

    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
    }
  // ────────────────────────────────────────────────────────────────────────────────



  // !
  // ! ─── FOR TESTING ONLY - USE THIS FUNCTION TO REMOVE THE NAVBAR ON PAGES THAT DO NOT NEED IT 
  // !

    RemoveNavbarForTesting() {
      if (this.router.url === '/login'
      || this.router.url === '/signup'
      || this.router.url === '/forgot'
      || this.router.url === '/new-user'
      || this.router.url === '/404') {
        return false;
      }

      return true;
    }
  // ! ────────────────────────────────────────────────────────────────────────────────



  ngOnInit() {
    this.currentUser = this.authenticationService.currentUser;

    this.messagingService.chatManager.connect()
    .then((user) => {
      this.currUser = user;
      console.log(user);
    });

    this.updates.available.subscribe(event => {
      this.update = true;
    });

    console.log(this.currentUser);
  }
}
