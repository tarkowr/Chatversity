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
  currentUserLoggedIn: any;
  title = 'Chatversity';
  update = false;
  currUser: any;
  // chatkitUser: any;

  constructor(
      private router: Router,
      private authService: AuthService,
      private updates: SwUpdate) {}

  //
  // ─── LOGOUT USER ────────────────────────────────────────────────────────────────
  //

    logout() {
      this.authService.logout();
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
    this.currentUserLoggedIn = this.authService.userLoggedIn();
    console.log('%cWelcome to Chatversity!', 'font-size: 20px; color: #186fa0;');

    // if (this.currentUserLoggedIn) {
    //   this.messagingService.chatManager.connect()
    //   .then((user) => {
    //     this.currUser = user;
    //     console.log(user);
    //     user.rooms.forEach(room => {
    //       user.subscribeToRoomMultipart({
    //         roomId: room.id,
    //         messageLimit: 10
    //       });
    //     });
    //   });

    //   this.updates.available.subscribe(event => {
    //     this.update = true;
    //   });

    //   console.log(this.currentUserLoggedIn);
    // }
  }
}
