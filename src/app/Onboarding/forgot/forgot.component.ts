import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { AuthService } from '../../Core/_services/auth.service';
import { CustomFormValidation } from '../../Core/_models/form-validation';

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
  formValidation: CustomFormValidation = new CustomFormValidation();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: ['', Validators.compose([ Validators.required, Validators.email, Validators.pattern(this.formValidation.regularEmailValidation)])]
    });

    this.returnUrl = '/';
  }

  // Convenience getter for easy access to form fields
  get f() { return this.forgotForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    // http.post(`${environment.apiUrl}/recovery/forgot`);

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
