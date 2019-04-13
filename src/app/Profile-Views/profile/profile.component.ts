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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user: any;
  profile: UserProfile;
  connections: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private msgService: MessagingService,
    private http: HttpClient,
    private userService: UserService) { }




  ngOnInit() {

    //
    // ─── CONNECT TO CHAKIT ───────────────────────────────────────────
    //
    this.msgService.chatManager
    .connect()
    .then(user => {
      this.user = user;
      console.log(user); // ! TESTING ONLY

      // Get users connections
      this.userService.getConnections(user.id)
      .toPromise()
      .then((connections) => {
        this.connections = connections;
        console.log(connections);
      });
    });
    // ─────────────────────────────────────────────────────────────────


  }
}
