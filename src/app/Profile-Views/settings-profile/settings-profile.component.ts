import { Component, OnInit, ViewChild } from '@angular/core'
import { FormGroup, FormBuilder, Validators, MaxLengthValidator } from '@angular/forms'
import { AuthService } from '../../Core/_services/auth.service'
import { UserService } from '../../Core/_services/user.service'
import { environment } from '../../../environments/environment.prod'

@Component({
  selector: 'app-settings-profile',
  templateUrl: './settings-profile.component.html',
  styleUrls: ['./settings-profile.component.scss']
})
export class SettingsProfileComponent implements OnInit {
  loading = false
  submitted = false
  editingForm = false

  profileForm: FormGroup
  user: any
  subscription: any
  currentUser: any
  pondOptions: any

  name = ''
  bio = ''
  major = ''
  graduationYear = ''
  interests = ''
  clubs = ''

  @ViewChild('myPond') pond: any

  pondFiles = []

  pondHandleInit() {
    console.log('FilePond has initialised', this.pond)
  }

  pondHandleAddFile(event: any) {

  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService) {}

  get f() { return this.profileForm.controls }

  //
  // ─── VALIDATION AND UPDATE USER AFTER FORM SUBMISSION ─────────────────────────────────────────────────
  //

  onSubmit() {
    this.submitted = true
    this.loading = true

    if (this.profileForm.invalid) {
      this.loading = false
      return
    }

    // Get updated profile data from user
    const _name: string = this.profileForm.get('name').value
    const _bio: string = this.profileForm.get('bio').value
    const _major: string = this.profileForm.get('major').value
    const _gradYr: number = this.profileForm.get('graduationYear').value
    const _interests: string = this.profileForm.get('interests').value
    const _clubs: string = this.profileForm.get('clubs').value

    // Get current user custom data
    const currentUserData = this.currentUser.customData

    // Add update data
    currentUserData['name'] = _name
    currentUserData['bio'] = _bio
    currentUserData['major'] = _major
    currentUserData['graduationYear'] = _gradYr
    currentUserData['interests'] = _interests
    currentUserData['clubs'] = _clubs

    // Send the updated data and update the user
    this.userService.update(this.currentUser.id, JSON.stringify(currentUserData))
    .toPromise()
    .then((data) => {
      this.setUserProfile(data)

      this.editingForm = false
      this.loading = false
      this.submitted = false
    })
    .catch((e) => {
      this.loading = false;
    })
  }


  //
  // ─── INITIALIZE SETTINGS FORM ─────────────────────────────────────────────────
  //

  initForm() {
    this.getUserProfile()

    this.profileForm = this.formBuilder.group({
      name: [ this.name, Validators.required ],
      bio: [ this.bio, MaxLengthValidator ],
      major: [ this.major, MaxLengthValidator ],
      graduationYear: [ this.graduationYear, Validators.compose([Validators.min(1900), Validators.max(this.getFutureDate())]) ],
      interests: [ this.interests, MaxLengthValidator ],
      clubs: [ this.clubs, MaxLengthValidator ]
    })
  }

  //
  // ─── GET YEAR THAT IS 20 YEARS GREATER THAN CURRENT YEAR ─────────────────────────────────────────────────
  //
  getFutureDate() {
    return new Date().getFullYear() + 20
  }

  //
  // ─── SET THE UPDATED USER PROFILE TO THE CURRENT USER ─────────────────────────────────────────────────
  //

  setUserProfile(userData) {
    this.currentUser.customData.avatarURL = userData.avatar_url
    this.currentUser.customData = userData.custom_data
    this.currentUser.name = userData.name
    this.currentUser.updatedAt = userData.updated_at
  }


  //
  // ─── GET USER PROFILE VALUES ─────────────────────────────────────────────────
  //

  getUserProfile() {
    try {
      this.name = this.currentUser.name
    } catch (error) {
      this.name = ''
    }

    try {
      this.bio = this.currentUser.customData.bio
    } catch (error) {
      this.bio = ''
    }

    try {
      this.major = this.currentUser.customData.major
    } catch (error) {
      this.major = ''
    }

    try {
      this.graduationYear = this.currentUser.customData.graduationYear
    } catch (error) {
      this.graduationYear = ''
    }

    try {
      this.interests = this.currentUser.customData.interests
    } catch (error) {
      this.interests = ''
    }

    try {
      this.clubs = this.currentUser.customData.clubs
    } catch (error) {
      this.clubs = ''
    }
  }

  ngOnInit() {
    this.authService.currentUser.subscribe((user) => {
      this.currentUser = user
      this.initForm()
      this.pondOptions = {
        instantUpload: false,
        class: 'my-filepond',
        multiple: true,
        labelIdle: 'Drop files here',
        acceptedFileTypes: 'image/jpeg, image/png',
        checkValidity: true,
        server: {
          url: `${environment.apiUrl}/`,
          process: `user/avatar/${this.currentUser.id}`,
          revert: './revert.php',
          restore: './restore.php?id=',
          fetch: './fetch.php?data='
        }
      }
    })
  }
}
