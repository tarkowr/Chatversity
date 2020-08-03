import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { UserService } from '../../Core/_services/user.service'
import { AuthService } from '../../Core/_services/auth.service'
import { View } from '../../Core/_models/view'

@Component({
  selector: 'app-view-friends-home',
  templateUrl: './view-friends-home.component.html',
  styleUrls: ['./view-friends-home.component.css']
})
export class ViewFriendsHomeComponent implements OnInit {

  connections: any

  connectionToAdd = new FormControl('')
  subscription: any
  rooms: any

  currentUser: any
  onlineUsers: any

  AllView: View = { id: 1, name: 'All', current: false }
  OnlineView: View = { id: 2, name: 'Online', current: false }
  PendingView: View = { id: 3, name: 'Pending', current: false }
  SearchView: View = { id: 4, name: 'Search', current: false }

  views: View[] = [this.AllView, this.OnlineView, this.PendingView, this.SearchView]

  constructor(
    private _userService: UserService,
    private authService: AuthService
  ) { }

  //
  // ─── RETURN USER FROM FRIEND LIST ───────────────────────────────────────────────
  //

  getUser(_id: number): any {
    return this.connections.find(c => c.id === _id)
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── CHECKS IF USER IS ONLINE ───────────────────────────────────────────────────
  //

  isUserOnline(_id: any) {
    return this.currentUser.presenceStore[_id] === 'online'
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── HIDE ALL VIEWS ─────────────────────────────────────────────────
  //

  setViewsToFalse() {
    this.views.forEach(function(view) {
      view.current = false
    })
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── SET CLICKED VIEW AS CURRENT VIEW ─────────────────────────────────────────────────
  //

  setView(_view: View) {
    this.setViewsToFalse()
    _view.current = true
  }
  // ─────────────────────────────────────────────────────────────────

  ngOnInit() {
    this.AllView.current = true

    this.authService.getCurrentUser().subscribe((user) => {
      this.currentUser = user

      this._userService.getConnections(user.id)
      .toPromise()
      .then((connections) => {
        this.connections = connections
      })
    })
  }
}
