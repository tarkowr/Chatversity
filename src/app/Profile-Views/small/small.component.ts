import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../Core/_models/user';
import { UserProfile } from '../../Core/_models/profile';

@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.css']
})
export class SmallComponent implements OnInit {

  bio: string;
  major: string;
  graduationYear: string;
  interests: string;
  clubs: string;

  @Input() user: any;
  @Input() isConnection = false;

  constructor() { }

  ngOnInit() {

    try {
      this.bio = this.user.customData.profile.bio;
    } catch (error) {
      this.bio = '';
    }


    try {
      this.major = this.user.customData.profile.major;
    } catch (error) {
      this.major = '';
    }


    try {
      this.graduationYear = this.user.customData.profile.graduationYear;
    } catch (error) {
      this.graduationYear = '';
    }


    try {
      this.interests = this.user.customData.profile.interests;
    } catch (error) {
      this.interests = '';
    }


    try {
      this.clubs = this.user.customData.profile.clubs;
    } catch (error) {
      this.clubs = '';
    }
  }

  addConnection() {
    this.isConnection = true;
  }

}
