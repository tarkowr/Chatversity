import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.css']
})
export class SmallComponent implements OnInit {

  bio: string
  graduationYear: string

  @Input() user: any
  @Input() isConnection = false

  constructor() { }

  ngOnInit() {
    this.bio = this.getUserBio()
    this.graduationYear = this.getUserGradYr()
  }

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

  // TODO: Implement actual add connection functionality
  addConnection() {
    this.isConnection = true
  }

}
