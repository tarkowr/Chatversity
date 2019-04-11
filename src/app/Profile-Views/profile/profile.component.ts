import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl, MaxLengthValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../Core/_models/user';
import { UserProfile } from '../../Core/_models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user: User;
  profile: UserProfile;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.user = {
      id: 2,
      firstName: 'Scott',
      lastName: 'Peterson',
      username: 'peter610@mail.nmc.edu',
      password: undefined,
      university: { id: 3, name: 'NMC', state:"MI", domains:null },
      profile: { bio: "Hello world! This is my bio.", major: "Computer Information Systems", graduationYear: 2021, interests: "Shooting, Riding, and the Outdoors", clubs: "Phi Theta Kappa" },
    }

    this.profile = this.user.profile;
  }
}
