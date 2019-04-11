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
  selector: 'app-settings-profile',
  templateUrl: './settings-profile.component.html',
  styleUrls: ['./settings-profile.component.scss']
})
export class SettingsProfileComponent implements OnInit {
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
    private router: Router) { }

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
      university: { id: 3, name: 'NMC', state:'MI', domains:null },
      profile: { bio: "Hello world!", major: "CIS", graduationYear:2021, interests:"Running, NBA, and CS", clubs:"bball"},
      active: false
    }

    this.profile = this.user.profile;
    
    // Build new form
    this.profileForm = this.formBuilder.group({
      firstname: [{value:this.user.firstName, disabled:!this.editMode}, Validators.required],
      lastname: [{value:this.user.lastName, disabled:!this.editMode}, Validators.required],
      bio: [{value:this.profile.bio, disabled:!this.editMode}, MaxLengthValidator],
      major: [{value:this.profile.major, disabled:!this.editMode}, MaxLengthValidator],
      graduationYear: [{value:this.profile.graduationYear, disabled:!this.editMode}, MaxLengthValidator],
      interests: [{value:this.profile.interests, disabled:!this.editMode}, MaxLengthValidator],
      clubs: [{value:this.profile.clubs, disabled:!this.editMode}, MaxLengthValidator]
    });
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
    this.loading = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
      this.loading = false;
      return;
    }

    // Disable form so user cannot edit
    this.profileForm.disable();
    this.editMode = false;

    // Get updated profile data from user
    let _fname:string = this.profileForm.get('firstname').value;
    let _lname:string = this.profileForm.get('lastname').value;
    let _bio:string = this.profileForm.get('bio').value;
    let _major:string = this.profileForm.get('major').value;
    let _gradYr:number = this.profileForm.get('graduationYear').value;
    let _interests:string = this.profileForm.get('interests').value;
    let _clubs:string = this.profileForm.get('clubs').value;

    // Update the user object
    this.user.firstName = _fname;
    this.user.lastName = _lname;
    this.user.profile.bio = _bio;
    this.user.profile.major = _major;
    this.user.profile.graduationYear = _gradYr;
    this.user.profile.interests = _interests;
    this.user.profile.clubs = _clubs;

    console.log(this.user);

    // Create obj to hold formdata
    const formData: FormData = new FormData();

    // Append input to form data
    formData.append('firstname', _fname);
    formData.append('lastname', _lname);
    formData.append('bio', _bio);
    formData.append('major', _major);
    formData.append('graduationYear', _gradYr.toString());
    formData.append('interests', _interests);
    formData.append('clubs', _clubs);

    //
    // ToDo: Send FormData to service to update Pusher/MongoDB
    //

    this.loading = false;
    }

}
