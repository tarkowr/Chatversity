import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../Core/_services/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user: any
  currentUser: any
  connections: any
  subscription: any

  name = ''
  bio = ''
  major = ''
  graduationYear = ''
  interests = ''
  clubs = ''

  constructor( private authService: AuthService ) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(
      (user) => {
        this.currentUser = user
        this.initForm()
      }
    )
  }

  //
  // ─── GET FORM VALUES FROM USER ─────────────────────────────────────────────────
  //

  initForm() {
    try {
      this.name = this.currentUser.name
    } catch (error) {
      this.name = ''
    }

    try {
      this.bio = this.currentUser.customData.bio
    } catch (error) {
      this.bio = ''
    }

    try {
      this.major = this.currentUser.customData.major
    } catch (error) {
      this.major = ''
    }

    try {
      this.graduationYear = this.currentUser.customData.graduationYear
    } catch (error) {
      this.graduationYear = ''
    }

    try {
      this.interests = this.currentUser.customData.interests
    } catch (error) {
      this.interests = ''
    }

    try {
      this.clubs = this.currentUser.customData.clubs
    } catch (error) {
      this.clubs = ''
    }
  }
}
