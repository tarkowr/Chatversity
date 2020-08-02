import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import {AuthService} from '../../Core/_services/auth.service'
import { CustomFormValidation } from '../../Core/_models/form-validation'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup
  loading = false
  submitted = false
  returnUrl = 'home'
  formValidation: CustomFormValidation = new CustomFormValidation()
  roomInvite: string

  constructor (
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.roomInvite = params['roomInvite']
      if (this.roomInvite) {
        this.returnUrl = 'rooms'
      }
    })

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern(this.formValidation.regularEmailValidation)]
      )],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(40)])]
  })
  }

  get f() { return this.loginForm.controls }

  onSubmit() {

    this.submitted = true
    this.loading = true

    if (this.loginForm.invalid) {
      this.loading = false
      return
    }

    this.authService.login(this.f.username.value, this.f.password.value)
    .catch(error => {
      this.loading = false
      this.loginForm.setErrors( {'invalid': true} )
    })
  }

}
