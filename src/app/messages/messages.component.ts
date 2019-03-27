import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

      rooms = [];
      currentUser: any;
      user_id: any;

  constructor(private http: HttpClient) {

    // Get User ID
    // TODO: Refactor => Add to user service
    const user_id = JSON.parse(localStorage.getItem('currentUser'))._embedded.user.id;
    this.user_id = user_id;
    console.log(`User ID: ${user_id}`);

    // Get Chatkit user
    this.http.post(`${environment.apiUrl}/chatkit/getuser`, {user_id}).subscribe(user => {
      this.currentUser = user;
    });

    // Get all of the current user's rooms
    this.http.post(`${environment.apiUrl}/chatkit/GetUserRooms`, {user_id}).subscribe(rooms => {
      this.rooms.push(rooms);
      console.log(`Rooms: ${rooms}`);
    });
  }
}
