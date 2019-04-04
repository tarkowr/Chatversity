import { Component, OnInit } from '@angular/core';
import { User } from '../../../../_models/user';
import { UserProfile } from '../../../../_models/profile';

@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.css']
})
export class SmallComponent implements OnInit {

  user: User;
  profile: UserProfile;

  constructor() { }

  ngOnInit() {

    this.user = {
      id: 2,
      firstName: 'Scott',
      lastName: 'Peterson',
      username: 'peter610@mail.nmc.edu',
      password: undefined,
      university: { id: 3, name: 'NMC' },
      profile: { bio: "Hello world!", major: "CIS", graduationYear:2021, interests:"Shooting, Riding, and The Outdoors", clubs:""},
    }

    this.profile = this.user.profile;
  }

}
