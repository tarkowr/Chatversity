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
  }

  showHomeView(){
    this.showPage("home");
  }

  showFriendsView(){
    this.showPage("friends");
  }

  showProfileView(){
    this.showPage("profile");
  }

  showPage(page:string){
    this.hideAllPages();
    switch(page){
      case "home":
        this.HomeView.current = true;
        break;
      case "friends":
        this.FriendsView.current = true;
        break;
      default:
        this.ProfileView.current = true;
        break;
    }  
  }

  hideAllPages(){
    this.views.forEach(function(view){
      view.current = false;
    })
  }
}
