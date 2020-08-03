import { Component, OnInit } from '@angular/core'
import { View } from '../../Core/_models/view'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-view-navigation-home',
  templateUrl: './view-navigation-home.component.html',
  styleUrls: ['./view-navigation-home.component.css']
})
export class ViewNavigationHomeComponent implements OnInit {
  HomeView: View = { id: 1, name: 'Latest News', current: false }
  FriendsView: View = { id: 2, name: 'Connections', current: false }
  ProfileView: View = { id: 3, name: 'Profile', current: false }

  views: View[] = [this.HomeView, this.FriendsView, this.ProfileView]

  headerText: string

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.HomeView.current = true
    this.headerText = this.HomeView.name

    // [routerLink]="['/home']" [queryParams]="{view:'param'}"
    this.activatedRoute.queryParams.subscribe(params => {
      const view = params['view']

      this.handleViewParam(view)
    })
  }

  //
  // ─── DISPLAY HOME VIEW ─────────────────────────────────────────────────
  //

  showHomeView() {
    this.showPage(this.HomeView.id)
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── DISPLAY FRIENDS VIEW ─────────────────────────────────────────────────
  //
  showFriendsView() {
    this.showPage(this.FriendsView.id)
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── DISPLAY PROFILE VIEW ─────────────────────────────────────────────────
  //
  showProfileView() {
    this.showPage(this.ProfileView.id)
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── DISPLAY VIEW BY ID ─────────────────────────────────────────────────
  //

  showPage(_id: number) {
    this.hideAllViews()
    switch (_id) {
      case 2:
        this.FriendsView.current = true
        this.headerText = this.FriendsView.name
        break
      case 3:
        this.ProfileView.current = true
        this.headerText = this.ProfileView.name
        break
      default:
        this.HomeView.current = true
        this.headerText = this.HomeView.name
        break
    }
  }
  // ─────────────────────────────────────────────────────────────────

  //
  // ─── HIDE ALL VIEWS ─────────────────────────────────────────────────
  //

  hideAllViews() {
    this.views.forEach(function(view) {
      view.current = false
    })
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── HANDLE DISPLAYING VIEWS BY URL PARAMETER ─────────────────────────────────────────────────
  //

  handleViewParam(param: string) {
    switch (param) {
      case 'profile':
        this.showProfileView()
        break
      case 'connections':
        this.showFriendsView()
        break
      default:
        this.showHomeView()
        break
    }
  }
  // ─────────────────────────────────────────────────────────────────
}
