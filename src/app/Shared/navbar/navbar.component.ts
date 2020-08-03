import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../Core/_services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser: any

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe((user) => {
      this.currentUser = user
    })
  }
}
