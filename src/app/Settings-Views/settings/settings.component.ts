import { Component, OnInit } from '@angular/core'
import { View } from '../../Core/_models/view'
import { Router, ActivatedRoute } from '@angular/router'
import { AuthService } from '../../Core/_services/auth.service'

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

  views: View[] = [this.ProfileView, this.PrivacyView, this.SecurityView, this.ConnectionsView]

  headerText: string
  returnUrl: string

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private _auth: AuthService) { }

  //
  // ─── LOGOUT USER ────────────────────────────────────────────────────────────────
  //

  logOut() {
    this._auth.logout()
    this.router.navigate([this.returnUrl])
  }
  // ────────────────────────────────────────────────────────────────────────────────

  //
  // ─── DISPLAY PROFILE VIEW ────────────────────────────────────────────────────────────────
  //

  showProfileView() {
    this.showPage(this.ProfileView.id)
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── DISPLAY PRIVACY VIEW ────────────────────────────────────────────────────────────────
  //

  showPrivacyView() {
    this.showPage(this.PrivacyView.id)
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── DISPLAY SECURITY VIEW ────────────────────────────────────────────────────────────────
  //

  showSecurityView() {
    this.showPage(this.SecurityView.id)
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── DISPLAY CONNECTIONS VIEW ────────────────────────────────────────────────────────────────
  //

  showConnectionsView() {
    this.showPage(this.ConnectionsView.id)
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── HIDE ALL VIEW ────────────────────────────────────────────────────────────────
  //

  hideAllViews() {
    this.views.forEach(function (view) {
      view.current = false
    })
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── DISPLAY VIEW BY ID ────────────────────────────────────────────────────────────────
  //

  showPage(_id: number) {
    this.hideAllViews()
    switch (_id) {
      case 2:
        this.PrivacyView.current = true
        this.headerText = this.PrivacyView.name
        break
      case 3:
        this.SecurityView.current = true
        this.headerText = this.SecurityView.name
        break
      case 4:
        this.ConnectionsView.current = true
        this.headerText = this.ConnectionsView.name
        break
      default:
        this.ProfileView.current = true
        this.headerText = this.ProfileView.name
        break
    }
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── DISPLAY VIEW BY URL PARAMETER ────────────────────────────────────────────────────────────────
  //

  handleViewParam(param: string) {
    switch (param) {
      case 'privacy':
        this.showPrivacyView()
        break
      case 'security':
        this.showSecurityView()
        break
      case 'connections':
        this.showConnectionsView()
        break
      default:
        this.showProfileView()
        break
    }
  }
  // ────────────────────────────────────────────────────────────────────────────────


  ngOnInit() {
    this.returnUrl = '/login'
  
    this.ProfileView.current = true
    this.headerText = this.ProfileView.name
  
    this.activatedRoute.queryParams.subscribe(params => {
      const view = params['view']
  
      this.handleViewParam(view)
    })
  }
}
