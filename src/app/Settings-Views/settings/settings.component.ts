import { Component, OnInit } from '@angular/core';
import { View } from '../../Core/_models/view';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  ProfileView:View = { id: 1, name: 'Profile', current: false }
  PrivacyView:View = { id: 2, name: 'Privacy', current: false }
  SecurityView:View = { id: 3, name: 'Security', current: false }
  ConnectionsView:View = { id: 3, name: 'Connections', current: false }

  views:View[] = [this.ProfileView, this.PrivacyView, this.SecurityView, this.ConnectionsView];

  headerText:string;

  constructor() { }

  ngOnInit() {
    this.ProfileView.current = true;
    this.headerText = this.ProfileView.name;
  }

  // Display profile view
  showProfileView(){
    this.hideAllViews();
  }

  // Display privacy view
  showPrivacyView(){
    this.hideAllViews();
  }

  // Display security view
  showSecurityView(){
    this.hideAllViews();
  }

  // Display connections view
  showConnectionsView(){
    this.hideAllViews();
  }
  
  // Hide all settings views
  hideAllViews(){
    this.views.forEach(function(view){
      view.current = false;
    })
  }

}
