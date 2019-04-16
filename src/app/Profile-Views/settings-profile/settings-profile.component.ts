import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl, MaxLengthValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../Core/_models/user';
import { UserProfile } from '../../Core/_models/profile';
import { AuthService } from '../../Core/_services/auth.service';
import { MessagingService } from '../../Core/_services/messaging.service';
import { environment } from '../../../environments/environment.prod';
import { UserService } from '../../Core/_services/user.service';

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
  user: any;
  profile: UserProfile;
  subscription: any;
  chatkitUser: any;
  editingForm = false;

  name = '';
  bio = '';
  major = '';
  graduationYear = '';
  interests = '';
  clubs = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _auth: AuthService,
    private msgService: MessagingService,
    private http: HttpClient,
    private userService: UserService) {

      this.subscription = this._auth.chatkitUser$.subscribe(
        (user) => {
          if(user){
            this.chatkitUser = user;
            console.log(this.chatkitUser);
            this.initForm();
          }
        }
      );

    }

  // Convenience getter for easy access to form fields
  get f() { return this.profileForm.controls; }

  onSaveClick(){
    if(this.profileForm){
      if(this.profileForm.invalid){
        this.submitted = true;
        return;
      }
    }

    this.submitted = false;
    this.editingForm = !this.editingForm;
  }


  // Validation and other actions upon form submission
  onSubmit() {
    this.submitted = true;
    this.loading = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
      this.loading = false;
      console.log('ERROR: Form invalid');
      return;
    }

    // Get updated profile data from user
    const _name: string = this.profileForm.get('name').value;
    const _bio: string = this.profileForm.get('bio').value;
    const _major: string = this.profileForm.get('major').value;
    const _gradYr: number = this.profileForm.get('graduationYear').value;
    const _interests: string = this.profileForm.get('interests').value;
    const _clubs: string = this.profileForm.get('clubs').value;

    // Get current user custom data
    const currentUserData = this.chatkitUser.customData;

    // Add update data
    currentUserData['name'] = _name;
    currentUserData['bio'] = _bio;
    currentUserData['major'] = _major;
    currentUserData['graduationYear'] = _gradYr;
    currentUserData['interests'] = _interests;
    currentUserData['clubs'] = _clubs;

    // Send the updated data and update the user
    this.userService.update(this.chatkitUser.id, JSON.stringify(currentUserData))
    .subscribe((data) => {
      console.log(data);
    });

    this.getUserProfile();
    this.loading = false;
  }

  initForm() {
    this.getUserProfile();

    // Build Form
    this.profileForm = this.formBuilder.group({
      // Name
      name: [ this.chatkitUser.name, Validators.required ],
      // Bio
      bio: [ this.bio, MaxLengthValidator ],
      // Major
      major: [ this.major, MaxLengthValidator ],
      // Graduation year
      graduationYear: [ this.graduationYear, MaxLengthValidator ],
      // Interests
      interests: [ this.interests, MaxLengthValidator ],
        // Clubs
      clubs: [ this.clubs, MaxLengthValidator ]
    });
  }

  getUserProfile(){
    try{
      this.name = this.chatkitUser.name;
    } catch (error) {
      this.name = '';
    }
    
    try {
      this.bio = this.chatkitUser.customData.bio;
    } catch (error) {
      this.bio = '';
    }

    try {
      this.major = this.chatkitUser.customData.major;
    } catch (error) {
      this.major = '';
    }

    try {
      this.graduationYear = this.chatkitUser.customData.graduationYear;
    } catch (error) {
      this.graduationYear = '';
    }

    try {
      this.interests = this.chatkitUser.customData.interests;
    } catch (error) {
      this.interests = '';
    }

    try {
      this.clubs = this.chatkitUser.customData.clubs;
    } catch (error) {
      this.clubs = '';
    }
  }


  ngOnInit() {
  }
}
