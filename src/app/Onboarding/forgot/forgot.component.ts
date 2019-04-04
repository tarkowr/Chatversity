import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { AuthService } from '../../Core/_services/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
})
export class ForgotComponent implements OnInit {
  forgotForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  appTitle = 'Forgot Password';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: ['', Validators.compose([ Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])]
    });

    this.returnUrl = '/';
  }

  // Convenience getter for easy access to form fields
  get f() { return this.forgotForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    // stop here if form is invalid
    if (this.forgotForm.invalid) {
      this.loading = false;
      return;
    }

    // Create obj to hold formdata
    const formData: FormData = new FormData();

    // Append input to form data
    formData.append('password', this.forgotForm.get('email').value);
    
    this.loading = false;
  }

}
