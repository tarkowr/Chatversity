import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../../Core/_services/auth.service'
import { University } from '../../Core/_models/university'
import { CustomFormValidation } from '../../Core/_models/form-validation'
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  signupForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string
  universities: University[]
  searchingForSchool = false
  wrongUniversity = false
  formValidation: CustomFormValidation = new CustomFormValidation()
  guessUniversity: string

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private http: HttpClient) { }

  ngOnInit() {

    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      university: [this.guessUniversity, Validators.required],
      username: ['', Validators.compose([
        Validators.required, Validators.email, Validators.pattern(this.formValidation.eduEmailValidation)
      ])],
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8), Validators.maxLength(40), Validators.pattern(this.formValidation.passwordValidation)
      ])]
    })

    this.returnUrl = 'new-user'
  }

  get f() { return this.signupForm.controls }

  //
  // ─── SEARCH FOR UNIVERSITY FROM JSON STORE ──────────────────────────────────────
  //

  findUniversity(query: string) {
    this.searchingForSchool = true
    return this.http.get(`${environment.apiUrl}/university/${query}`)
    .toPromise()
    .catch(() => {
      this.searchingForSchool = false
      return null
    })
  }

  //
  // ─── GET UNIVERSITY BY DOMAIN ──────────────────────────────────────
  //

  async getUniversity(query: string) {
    let data = await this.findUniversity(query)

    if (data) {
      this.guessUniversity = data['name']
      this.signupForm.get('university').setValue(this.guessUniversity)
    }
  }

  //
  // ─── HANDLE SIGN UP ─────────────────────────────────────────────────────────────
  //

  onSubmit() {
    this.submitted = true
    this.loading = true

    if (this.signupForm.invalid) {
      this.loading = false
      return
    }

    this.auth.signup(this.f.firstname.value, this.f.lastname.value, this.guessUniversity, this.f.username.value, this.f.password.value)
    .then(data => {
      this.router.navigate([this.returnUrl])
    },
    error => {
      this.loading = false
      this.f.username.setErrors( { 'oktaError': true } )
    })
  }
}
