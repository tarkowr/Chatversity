import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import {AuthService} from '../../Core/_services/auth.service';
import { first } from 'rxjs/operators';
import { CustomFormValidation } from '../../Core/_models/form-validation';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  formValidation: CustomFormValidation = new CustomFormValidation();

  // username = new FormControl('');

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService ) {}

  ngOnInit() {
    // TODO: Check if already logged in, redirect
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([ Validators.required, Validators.email, Validators.pattern(this.formValidation.regularEmailValidation)])],
      password: ['', Validators.required]
  });
    this.returnUrl = '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.loading = false;
      return;
    }

    // Create obj to hold formdata
    const formData: FormData = new FormData();
    // Append username and password to form data
    formData.append('username', this.loginForm.get('username').value);
    formData.append('password', this.loginForm.get('password').value);

    console.log(formData);

    // Send the obj to our user auth function
    // this.auth.login(this.f.username.value, this.f.password.value).pipe()
    // .subscribe(
    //     data => {
    //         this.router.navigate([this.returnUrl]);
    //     },
    //     error => {
    //         // this.alertService.error(error);
    //         this.loading = false;
    //         this.f.username.setErrors({invalid: true});
    //     });
    this.auth.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe(data => {
      this.router.navigate([this.returnUrl]);
    },
    error => {
      this.loading = false;
      this.f.username.setErrors({invalid: true});
    });
  }
}