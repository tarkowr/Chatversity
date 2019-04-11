import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from '../../Core/_models/user';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-view-friends-home',
  templateUrl: './view-friends-home.component.html',
  styleUrls: ['./view-friends-home.component.css']
})
export class ViewFriendsHomeComponent implements OnInit {
  searchForm: FormGroup;
  loading = false;
  submitted = false;
  connections: User[];
  connection: User;
  isConnection = false;

  // Field for connection
  connectionToAdd = new FormControl('');


  //
  // ─── CONSTRUCTOR ────────────────────────────────────────────────────────────────
  //

    constructor(private http: HttpClient, private formBuilder: FormBuilder) { }
  // ────────────────────────────────────────────────────────────────────────────────

  results: User[];

  ngOnInit() {

    // Setup search box
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required]
    });

    // DELETE THIS TEST DATA WHEN USER SERVICE IS AVAILABLE
    this.connections = [
      {
        id: 1,
        firstName: 'Richie',
        lastName: 'Tarkowski',
        username: '',
        password: '',
        university: null,
        profile: {
          bio: 'This is my bio!',
          major: 'CIS',
          graduationYear: 2021,
          interests: 'NA',
          clubs: 'none'
        },
        active: true
      },
      {
        id: 2,
        firstName: 'Connor',
        lastName: 'Hansen',
        username: '',
        password: '',
        university: null,
        profile: {
          bio: 'Hello World!',
          major: 'CS',
          graduationYear: 2020,
          interests: 'Web Design',
          clubs: 'Robotics'
        },
        active: true
      },
      {
        id: 3,
        firstName: 'Scott',
        lastName: 'Peterson',
        username: '',
        password: '',
        university: null,
        profile: {
          bio: 'Hi, everyone!',
          major: 'Engineering',
          graduationYear: 2019,
          interests: 'Lacross',
          clubs: 'Engineering Club'
        },
        active: false
      },
      {
        id: 4,
        firstName: 'Noah',
        lastName: 'Osterhout',
        username: '',
        password: '',
        university: null,
        profile: {
          bio: 'Progammer',
          major: 'Computer Information Systems',
          graduationYear: 2021,
          interests: 'Programming',
          clubs: 'CIS Club'},
        active: false
      },
      {
        id: 5,
        firstName: 'Cati',
        lastName: 'Kujawski',
        username: '',
        password: '',
        university: null,
        profile: {
          bio: 'Hello World',
          major: 'FSU',
          graduationYear: 2018,
          interests: 'Soccer',
          clubs: 'Soccer Club'
        },
        active: true
      }
    ];

    this.connection = this.connections[0];
  }



  //
  // ─── CONVENIENCE GETTER FOR EASY ACCESS TO FORM FIELDS ──────────────────────────
  //

    get f() { return this.searchForm.controls; }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── ADD CONNECTION ─────────────────────────────────────────────────────────────
  //

    addConnection() {
      console.log(this.connectionToAdd.value);
      // Get okta user by login (email)
      this.http.get(`${environment.apiUrl}/okta/GetUserByLogin/${this.connectionToAdd.value}` )
      .toPromise()
      .then((oktaUser) => {
        console.log(oktaUser);
        // Get the user from Chatkit by matching the IDs
        this.http.get(`${environment.apiUrl}/chatkit/GetUserById/${oktaUser['id']}`)
        .toPromise()
        .then((chatkitUser) => {
          // Found user => add 'connection request marker' to custom data field
          // TODO: Check if users are already connected

        })
        .catch((error) => {
          console.log('Chatkit user not found!');
        });
      })
      .catch((error) => {
        console.log('Okta user not found!');
      });
    }
  // ─────────────────────────────────────────────────────────────────



  //
  // ─── RETURN USER FROM FRIEND LIST ───────────────────────────────────────────────
  //

    getUser(_id: number): User {
      return this.connections.find(c => c.id === _id);
    }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── FILTER LIST OF USERS BY NAME ───────────────────────────────────────────────
  //

    getUsersByName(_name: string) {
      _name = _name.toLowerCase();
      this.results = this.connections.filter(c => (c.firstName.toLowerCase() + ' ' + c.lastName.toLowerCase()).includes(_name));
    }
  // ────────────────────────────────────────────────────────────────────────────────



  //
  // ─── CHECK IF USERS ARE FRIENDS ─────────────────────────────────────────────────
  //

    isConnected(_id: number) {
      this.isConnection = (_id % 2 === 1) ? true : false; // DELETE THIS LINE

      // Get current user data

      // Check if this user is on the other user's connections list

      // Toggle isConnection variable

      return;
    }
  // ─────────────────────────────────────────────────────────────────



  //
  // ─── HANDLE CLICK USER BUTTON ───────────────────────────────────────────────────
  //

    setUser(_id: number) {
      this.connection = this.getUser(_id);
      this.isConnected(_id);
    }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── HANDLE SIGN UP ─────────────────────────────────────────────────────────────
  //
  onSearch() {
    this.submitted = true;
    this.loading = true;

    if (this.searchForm.invalid) {
      this.loading = false;
      this.submitted = false;
      return;
    }

    this.getUsersByName(this.searchForm.get('search').value);

    this.loading = false;
  }
}
