import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MessagingService } from '../_services/messaging.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  rooms: any;
  currentUser: any;
  user_id: any;

  constructor(private http: HttpClient, private msgService: MessagingService) {}


  // Get Chatkit user
  getUser(user_id) {
    this.http.post<any>(`${environment.apiUrl}/chatkit/getuser`, {user_id})
    .toPromise()
    .then(res => {
      this.currentUser = res;
      this.user_id = res.id;
      console.log(res);
    })
    .catch(error => console.log(error));
  }

  // Get Chatkit user's rooms
  getUserRooms(user_id) {
    this.http.post<any>(`${environment.apiUrl}/chatkit/getuserrooms`, {user_id})
    .toPromise()
    .then(res => {
      this.rooms = res;
      console.log(res);
    })
    .catch(error => console.log(error));
  }

  // Join a room
  public joinRoom(roomID) {
    this.msgService.joinRoom(roomID);
  }


  ngOnInit() {

    // this.msgService.chatManager().then(data => console.log(data));

    const user_id = JSON.parse(localStorage.getItem('currentUser'))._embedded.user.id;
    this.getUser(user_id);
    this.getUserRooms(user_id);
    console.log('adsf');
  }

  // Get User ID
    // TODO: Refactor => Add to user service
    // const user_id = JSON.parse(localStorage.getItem('currentUser'))._embedded.user.id;
    // this.user_id = user_id;
    // console.log(`User ID: ${user_id}`);
  // Get all of the current user's rooms
  // this.rooms = return this.http.post<arr>(`${environment.apiUrl}/chatkit/GetUserRooms`, {user_id})
  // .pipe(map(res => {
  //   res.json();
  // }));
}
