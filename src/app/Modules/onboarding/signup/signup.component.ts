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
    //
    // ToDo: Get list of universities via service
    //
    this.universities = [
      {
        id: 1,
        name: 'NMC'
      },
      {
        id: 2,
        name: 'SVSU'
      },
      {
        id: 3,
        name: 'FSU'
      },
      {
        id: 4,
        name: 'UofM'
      },
      {
        id: 5,
        name: 'MSU'
      },
      {
        id: 6,
        name: 'CMU'
      }
    ];

    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      university: ['', Validators.required],
      username: ['', Validators.compose([ Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: ['', Validators.compose([ Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$')])]
    });

    this.returnUrl = '/';
  }

  // Check for username or password errors
  checkForFormErrors() {
    if (this.f.username.errors || this.f.password.errors) {
      return true;
    }
    return false;
  }

  // Convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  // Check for valid university
  checkUniversity(_id: number): boolean {
    console.log('University Id:' + _id);
    return (this.universities.find(x => x.id.toString() === _id.toString())) ? true : false;
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      this.loading = false;
      return;
    }

    // Stop if invalid university
    if (!(this.checkUniversity(this.signupForm.get('university').value))) {
      console.log('Invalid University.')
      this.f.university.setErrors({'invalid': true});
      this.loading = false;
      return;
    }

    // Create obj to hold formdata
    const formData: FormData = new FormData();

    // Append input to form data
    formData.append('firstname', this.signupForm.get('firstname').value);
    formData.append('lastname', this.signupForm.get('lastname').value);
    formData.append('university', this.signupForm.get('university').value);
    formData.append('username', this.signupForm.get('username').value);
    formData.append('password', this.signupForm.get('password').value);

    this.auth.signup(this.f.firstname.value, this.f.lastname.value, this.f.university.value, this.f.username.value, this.f.password.value);
    
    this.loading = false;
  }
}
