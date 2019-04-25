import { Component, OnInit, Input } from '@angular/core'
import { UserService } from '../../Core/_services/user.service'

@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.css']
})
export class SmallComponent implements OnInit {

  bio: string
  graduationYear: string

  loading = false

  @Input() currUser: any
  @Input() user: any

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.bio = this.getUserBio()
    this.graduationYear = this.getUserGradYr()
  }

  // Check if user can add popup profile user as connection
  canAddAsConnection() {
    if (!this.currUser) {
      return false
    }

    if (!this.currUser.customData) {
      return false
    }

    return (this.currUser.id === this.user.id) ? false : true
  }

  //
  // ─── CHECK IF USERS ARE CONNECTED ───────────────────────────────────────────────────
  //
  validateIsConnectionStatus() {
    if (!this.currUser.customData.connections) {
      this.currUser.customData['connections'] = []
      return true
    }

    if (this.currUser.id === this.user.id) {
      return false
    }

    return (this.currUser.customData.connections.includes(this.user.id)) ? false : true
  }
  // ─────────────────────────────────────────────────────────────────

  // Get user's bio
  getUserBio() {
    try {
      this.bio = this.user.customData.bio
    } catch (err) {
      try {
        this.bio = this.user.custom_data.bio
      } catch (error) {
        this.bio = ''
      }
    }

    if (!this.bio) {
      this.bio = ''
    }

    return this.bio
  }

  // Get user's gradution year
  getUserGradYr() {
    try {
      this.graduationYear = this.user.customData.graduationYear
    } catch (err) {
      try {
        this.graduationYear = this.user.custom_data.graduationYear
      } catch (error) {
        this.graduationYear = ''
      }
    }

    if (!this.graduationYear) {
      this.graduationYear = ''
    }

    return this.graduationYear
  }

  // Add user as a connection
  addConnection() {
    if (!this.validateIsConnectionStatus()) {
      return
    }

    if (!this.user.id) {
      return
    }

    this.loading = true

    // Get current user custom data
    const currentUserData = this.currUser.customData

    currentUserData['name'] = this.currUser.name
    currentUserData.connections.push(this.user.id)

    // Send the updated connection and update the user
    this.userService.update(this.currUser.id, JSON.stringify(currentUserData))
    .toPromise()
    .then((data) => {
      console.log('UPDATED CHATKIT USER', this.currUser)

      this.setUserConnections(data)

      this.loading = false
    })
  }

  // Set updated connections
  setUserConnections(userData) {
    this.currUser.customData = userData.custom_data
    this.currUser.updatedAt = userData.updated_at
  }
}
