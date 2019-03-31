import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl, MaxLengthValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../_models/user';
import { UserProfile } from '../../../_models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  loading = false;
  submitted = false;
  editMode = false;
  returnUrl: string;
  user: User;
  profile: UserProfile;

  constructor(    
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
    
    //
    // ToDo: Get user data from service
    //

    // Create test user
    this.user = {
      id: 1,
      firstName: 'Richie',
      lastName: 'Tarkowski',
      username: 'tarkowr@mail.nmc.edu',
      password: undefined,
      university: { id: 3, name: 'NMC' },
      profile: { bio: "hello world", major: "cis", graduationYear:2010, interests:"running", clubs:"bball"},
    }

    this.profile = this.user.profile;
    
    this.profileForm = this.formBuilder.group({
      firstname: [{value:this.user.firstName, disabled:!this.editMode}, Validators.required],
      lastname: [{value:this.user.lastName, disabled:!this.editMode}, Validators.required],
      bio: [{value:this.profile.bio, disabled:!this.editMode}, MaxLengthValidator],
      major: [{value:this.profile.major, disabled:!this.editMode}, MaxLengthValidator],
      graduationYear: [{value:this.profile.graduationYear, disabled:!this.editMode}, MaxLengthValidator],
      interests: [{value:this.profile.interests, disabled:!this.editMode}, MaxLengthValidator],
      clubs: [{value:this.profile.clubs, disabled:!this.editMode}, MaxLengthValidator]
    });

    //
    // ToDo: Lookup university by ID
    //
  }

  // Convenience getter for easy access to form fields
  get f() { return this.profileForm.controls; }

  // Activate edit mode
  onClickEdit() { 
    this.editMode = true;
    this.profileForm.enable();
  }

  // Validation and other actions upon form submission
  onSubmit() { 
    this.submitted = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
      return;
    }

    this.profileForm.disable();
    this.editMode = false;

    //
    // ToDo: Create new FormData and send to service to update Pusher/MongoDB
    //
   }

}
