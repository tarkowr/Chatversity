import { Component, OnInit } from '@angular/core';
import { User } from '../../Core/_models/user';

@Component({
  selector: 'app-view-friends-home',
  templateUrl: './view-friends-home.component.html',
  styleUrls: ['./view-friends-home.component.css']
})
export class ViewFriendsHomeComponent implements OnInit {
  connections: User[];
  connection: User;
  isConnection: boolean = false;

  constructor() { }

  ngOnInit() {

    // DELETE THIS TEST DATA WHEN USER SERVICE IS AVAILABLE
    this.connections = [
      { 
        id:1,
        firstName: 'Richie',
        lastName: 'Tarkowski',
        username: "",
        password: "",
        university: null,
        profile: {bio:"This is my bio!", major:"CIS", graduationYear:2021, interests:"NA",clubs:"none"}
      },
      { 
        id:2,
        firstName: 'Connor',
        lastName: 'Hansen',
        username: "",
        password: "",
        university: null,
        profile: {bio:"Hello World!", major:"CS", graduationYear:2020, interests:"Web Design",clubs:"Robotics"}
      },
      { 
        id:3,
        firstName: 'Scott',
        lastName: 'Peterson',
        username: "",
        password: "",
        university: null,
        profile: {bio:"Hi, everyone!", major:"Engineering", graduationYear:2019, interests:"Lacross",clubs:"Engineering Club"}
      },
      { 
        id:4,
        firstName: 'Noah',
        lastName: 'Osterhout',
        username: "",
        password: "",
        university: null,
        profile: {bio:"Progammer", major:"Computer Information Systems", graduationYear:2021, interests:"Programming",clubs:"CIS Club"}
      },
      { 
        id:5,
        firstName: 'Cati',
        lastName: 'Kujawski',
        username: "",
        password: "",
        university: null,
        profile: {bio:"Hello World", major:"FSU", graduationYear:2018, interests:"Soccer",clubs:"Soccer Club"}
      }
    ]

    this.connection = this.connections[0];
  }

  // Return user from friend list
  getUser(_id:number):User{
    return this.connections.find(c => c.id == _id);
  }

  // Check if users are friends
  isConnected(_id:number){
    this.isConnection = (_id % 2 == 1) ? true : false; // DELETE THIS LINE

    // Get current user data

    // Check if this user is on the other user's connections list

    // Toggle isConnection variable

    return;
  }

  // Handle click user button
  setUser(_id:number){
    this.connection = this.getUser(_id);
    this.isConnected(_id);
  }
}
