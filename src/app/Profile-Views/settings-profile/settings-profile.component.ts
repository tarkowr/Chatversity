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

  constructor(    
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private msgService: MessagingService,
    private http: HttpClient,
    private userService: UserService) { }

  ngOnInit() {
  
    //
    // ─── CONNECT TO CHAKIT ───────────────────────────────────────────
    //
    this.msgService.chatManager
    .connect()
    .then(user => {
      this.user = user;
      console.log(user); // ! TESTING ONLY

      // Build Form
      this.profileForm = this.formBuilder.group({
        name: [{value:this.user.name, disabled:!this.editMode}, Validators.required],
        bio: [{value:this.user.customData.profile.bio, disabled:!this.editMode}, MaxLengthValidator],
        major: [{value:this.user.customData.profile.major, disabled:!this.editMode}, MaxLengthValidator],
        graduationYear: [{value:this.user.customData.profile.graduationYear, disabled:!this.editMode}, MaxLengthValidator],
        interests: [{value:this.user.customData.profile.interests, disabled:!this.editMode}, MaxLengthValidator],
        clubs: [{value:this.user.customData.profile.clubs, disabled:!this.editMode}, MaxLengthValidator]
      });
    });
    // ─────────────────────────────────────────────────────────────────
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
    let _name:string = this.profileForm.get('name').value;
    let _bio:string = this.profileForm.get('bio').value;
    let _major:string = this.profileForm.get('major').value;
    let _gradYr:number = this.profileForm.get('graduationYear').value;
    let _interests:string = this.profileForm.get('interests').value;
    let _clubs:string = this.profileForm.get('clubs').value;

    // Update the user object
    this.user.name = _name;
    this.user.customData.profile.bio = _bio;
    this.user.customData.profile.major = _major;
    this.user.customData.profile.graduationYear = _gradYr;
    this.user.customData.profile.interests = _interests;
    this.user.customData.profile.clubs = _clubs;

    console.log(this.user);

    // Create obj to hold formdata
    const formData: FormData = new FormData();

    // Append input to form data
    formData.append('name', _name);
    formData.append('bio', _bio);
    formData.append('major', _major);
    formData.append('graduationYear', _gradYr.toString());
    formData.append('interests', _interests);
    formData.append('clubs', _clubs);

    this.userService.update(this.user).pipe().subscribe(data => {
      console.log('Success!')
    },
    error => {
      this.loading = false;
      //this.f.username.setErrors({invalid: true});
    });

    }

}
