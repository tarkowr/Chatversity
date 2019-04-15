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
          this.chatkitUser = user;
          console.log(this.chatkitUser);
        }
      );

    }

  ngOnInit() {

    //
    // ─── CONNECT TO CHAKIT ───────────────────────────────────────────
    //
    let bio: string;
    try {
      bio = this.chatkitUser.customData.profile.bio;
    } catch (error) {
      bio = '';
    }

    let major: string;
    try {
      major = this.chatkitUser.customData.profile.major;
    } catch (error) {
      major = '';
    }

    let graduationYear: string;
    try {
      graduationYear = this.chatkitUser.customData.profile.graduationYear;
    } catch (error) {
      graduationYear = '';
    }

    let interests: string;
    try {
      interests = this.chatkitUser.customData.profile.interests;
    } catch (error) {
      interests = '';
    }

    let clubs: string;
    try {
      clubs = this.chatkitUser.customData.profile.clubs;
    } catch (error) {
      clubs = '';
    }

      // Build Form
      this.profileForm = this.formBuilder.group({
        // Name
        name: [
          {
            value: this.chatkitUser.name, disabled: !this.editMode
          },
          Validators.required
        ],
        // Bio
        bio: [
          {
            value: bio, disabled: !this.editMode
          },
          MaxLengthValidator],
        // Major
        major: [
          {
            value: major, disabled: !this.editMode
          },
          MaxLengthValidator
        ],
        // Graduation year
        graduationYear: [
          {
            value: graduationYear, disabled: !this.editMode
          },
          MaxLengthValidator
        ],
        // Interests
        interests: [
          {
            value: interests, disabled: !this.editMode
          },
            MaxLengthValidator
          ],
          // Clubs
        clubs: [
          {
            value: clubs, disabled: !this.editMode
          },
          MaxLengthValidator
        ]
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
    const _name: string = this.profileForm.get('name').value;
    const _bio: string = this.profileForm.get('bio').value;
    const _major: string = this.profileForm.get('major').value;
    const _gradYr: number = this.profileForm.get('graduationYear').value;
    const _interests: string = this.profileForm.get('interests').value;
    const _clubs: string = this.profileForm.get('clubs').value;

    // Update the user object
    this.chatkitUser.name = _name;
    this.chatkitUser.customData.profile.bio = _bio;
    this.chatkitUser.customData.profile.major = _major;
    this.chatkitUser.customData.profile.graduationYear = _gradYr;
    this.chatkitUser.customData.profile.interests = _interests;
    this.chatkitUser.customData.profile.clubs = _clubs;


    // Create obj to hold formdata
    const formData: FormData = new FormData();

    // Append input to form data
    formData.append('name', _name);
    formData.append('bio', _bio);
    formData.append('major', _major);
    formData.append('graduationYear', _gradYr.toString());
    formData.append('interests', _interests);
    formData.append('clubs', _clubs);

    this.userService.update(this.chatkitUser.id, this.chatkitUser).pipe().subscribe(data => {
      console.log('Success!');
    },
    error => {
      this.loading = false;
      // this.f.username.setErrors({invalid: true});
    });

    }

}
