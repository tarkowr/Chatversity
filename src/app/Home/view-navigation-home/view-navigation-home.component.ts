import { Component, OnInit } from '@angular/core';
import { View } from '../../Core/_models/view';

@Component({
  selector: 'app-view-navigation-home',
  templateUrl: './view-navigation-home.component.html',
  styleUrls: ['./view-navigation-home.component.css']
})
export class ViewNavigationHomeComponent implements OnInit {
  HomeView:View = { id: 1, name: 'Home', current: false }
  FriendsView:View = { id: 2, name: 'Friends', current: false }
  ProfileView:View = { id: 3, name: 'Profile', current: false }

  views:View[] = [this.HomeView, this.FriendsView, this.ProfileView];

  constructor() { }

  ngOnInit() {
    this.HomeView.current = true;
  }

  // Display home view
  showHomeView(){
    this.showPage(this.HomeView.id);
  }

  // Display friends view
  showFriendsView(){
    this.showPage(this.FriendsView.id);
  }

  // Display profile view
  showProfileView(){
    this.showPage(this.ProfileView.id);
  }

  // Display view by id
  showPage(_id:number){
    this.hideAllViews();
    switch(_id){
      case 2:
        this.ProfileView.current = true;
        break;
      case 3:
        this.FriendsView.current = true;
        break;
      default:
        this.HomeView.current = true;
        break;
    }  
  }

  // Hide all home views
  hideAllViews(){
    this.views.forEach(function(view){
      view.current = false;
    })
  }
}
