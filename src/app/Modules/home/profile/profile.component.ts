import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl, MaxLengthValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../_models/user';
import { UserProfile } from '../../../_models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(    
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

  }
}
