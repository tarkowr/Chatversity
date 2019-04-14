import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from '../../Core/_models/user';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { UserService } from '../../Core/_services/user.service';
import { MessagingService } from '../../Core/_services/messaging.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-view-friends-home',
  templateUrl: './view-friends-home.component.html',
  styleUrls: ['./view-friends-home.component.css']
})
export class ViewFriendsHomeComponent implements OnInit {
  searchForm: FormGroup;
  loading = false;
  submitted = false;
  connections: any;
  connection: User;
  isConnection = false;
  user: any;

  // Field for connection
  connectionToAdd = new FormControl('');


  //
  // ─── CONSTRUCTOR ────────────────────────────────────────────────────────────────
  //

    constructor(private http: HttpClient,
      private formBuilder: FormBuilder,
      private _userService: UserService,
      private _msgService: MessagingService,
      private app: AppComponent) { }
  // ────────────────────────────────────────────────────────────────────────────────

  results: User[];

  ngOnInit() {

    // Instantiate chatkit
    this._msgService.chatManager.connect()
    .then((user) => {
      this.user = user;
      console.log(user);


      // Load user connections
      this._userService.getConnections(this.user.id)
      .toPromise()
      .then((connections) => {
        this.connections = connections;
      });
    });

    // Setup search box
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required]
    });
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

  sortList(users: User[]) {
    return  users.sort((a, b) => ((a.firstName.toLowerCase() + ' ' + a.lastName.toLowerCase())
    > (b.firstName.toLowerCase() + ' ' + b.lastName.toLowerCase()) ? 1 : -1));
  }

  //
  // ─── FILTER LIST OF USERS BY NAME ───────────────────────────────────────────────
  //

    getUsersByName(_name: string) {
      _name = _name.toLowerCase();
      this.results = this.connections.filter(c =>
        (c.firstName.toLowerCase() + ' ' + c.lastName.toLowerCase()).includes(_name)).slice(0, 5);
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
      this.submitted = false;
      this.loading = false;
      return;
    }

    const query: string = this.searchForm.get('search').value;

    this.getUsersByName(query);

    this.loading = false;
  }
  // ────────────────────────────────────────────────────────────────────────────────

}
