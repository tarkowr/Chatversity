import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { AuthService } from '../../../_services/auth.service';
import { first } from 'rxjs/operators';
import { University } from '../../../_models/university';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  universities: University[];

  constructor(    
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstlastname: ['', Validators.required],
      university: ['', Validators.required],
      username: ['', Validators.compose([, Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: ['', Validators.compose([ Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$')])]
    });

    //
    // ToDo: Get list of universities via service
    //

    this.returnUrl = '/';
  }

  // Check for username or password errors
  checkForFormErrors(){
    if(this.f.username.errors || this. f.password.errors){
      return true;
    }
    return false;
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    // Create obj to hold formdata
    const formData: FormData = new FormData();

    // Append input to form data
    formData.append('firstlastname', this.signupForm.get('firstlastname').value);
    formData.append('university', this.signupForm.get('university').value);
    formData.append('username', this.signupForm.get('username').value);
    formData.append('password', this.signupForm.get('password').value);

    //console.log(formData);

    this.auth.signup(this.f.firstlastname.value, this.f.university.value, this.f.username.value, this.f.password.value);
  }
}
