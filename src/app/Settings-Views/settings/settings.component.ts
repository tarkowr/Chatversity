import { Component, OnInit } from '@angular/core';
import { View } from '../../Core/_models/view';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  ProfileView: View = { id: 1, name: 'Profile', current: false }
  PrivacyView: View = { id: 2, name: 'Privacy', current: false }
  SecurityView: View = { id: 3, name: 'Security', current: false }
  ConnectionsView: View = { id: 4, name: 'Connections', current: false }

  views: View[] = [this.ProfileView, this.PrivacyView, this.SecurityView, this.ConnectionsView];

  headerText: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ProfileView.current = true;
    this.headerText = this.ProfileView.name;

    this.activatedRoute.queryParams.subscribe(params => {
      let view = params['view'];

      this.handleViewParam(view);
    });
  }

  // Display profile view
  showProfileView() {
    this.showPage(this.ProfileView.id);
  }

  // Display privacy view
  showPrivacyView() {
    this.showPage(this.PrivacyView.id);
  }

  // Display security view
  showSecurityView() {
    this.showPage(this.SecurityView.id);
  }

  // Display connections view
  showConnectionsView() {
    this.showPage(this.ConnectionsView.id);
  }

  // Hide all settings views
  hideAllViews() {
    this.views.forEach(function (view) {
      view.current = false;
    })
  }

  // Display view by id
  showPage(_id: number) {
    this.hideAllViews();
    switch (_id) {
      case 2:
        this.PrivacyView.current = true;
        this.headerText = this.PrivacyView.name;
        break;
      case 3:
        this.SecurityView.current = true;
        this.headerText = this.SecurityView.name;
        break;
      case 4:
        this.ConnectionsView.current = true;
        this.headerText = this.ConnectionsView.name;
        break;
      default:
        this.ProfileView.current = true;
        this.headerText = this.ProfileView.name;
        break;
    }
  }

  // Display view based on url param
  handleViewParam(param: string) {
    switch (param) {
      case "privacy":
        this.showPrivacyView();
        break;
      case "security":
        this.showSecurityView();
        break;
      case "connections":
        this.showConnectionsView();
        break;
      default:
        this.showProfileView();
        break;
    }
  }
}
