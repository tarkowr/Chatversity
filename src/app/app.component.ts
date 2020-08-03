import { Component, OnInit } from '@angular/core'
import { AuthService } from './Core/_services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  currentUserLoggedIn: any
  title = 'Chatversity'
  update = false
  currUser: any
  currentUser: any

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  //
  // ─── LOGOUT USER ────────────────────────────────────────────────────────────────
  //

    logout() {
      this.authService.logout()
    }
  // ────────────────────────────────────────────────────────────────────────────────


  // 
  // USE THIS FUNCTION TO REMOVE THE NAVBAR ON PAGES THAT DO NOT NEED IT
  // 

    RemoveNavbar() {
      if (this.router.url === '/login'
      || this.router.url === '/signup'
      || this.router.url === '/forgot'
      || this.router.url === '/new-user'
      || this.router.url === '/404') {
        return false
      }

      return true
    }
  // ────────────────────────────────────────────────────────────────────────────────

  ngOnInit() {
    console.log('%cWelcome to Chatversity!', 'font-size: 20px; color: #186fa0;')
    console.log('Initializing app...')

    this.authService.getCurrentUser().subscribe((user) => {
      this.currentUser = user
    })
  }
}
