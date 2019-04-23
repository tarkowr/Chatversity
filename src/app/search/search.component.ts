import { Component, OnInit } from '@angular/core'
import { View } from '../Core/_models/view'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  UserView: View = { id: 1, name: 'Users', current: false }
  RoomView: View = { id: 2, name: 'Rooms', current: false }

  views: View[] = [this.UserView, this.RoomView]

  headerText: string

  constructor() { }

  // Display view by id
  showPage(_id: number) {
    this.hideAllViews()
    switch (_id) {
      case 2:
        this.RoomView.current = true
        this.headerText = this.RoomView.name
        break
      default:
        this.UserView.current = true
        this.headerText = this.UserView.name
        break
    }
  }

  // Hide all home views
  hideAllViews() {
    this.views.forEach(function(view) {
      view.current = false
    })
  }

  ngOnInit() {
    this.UserView.current = true
    this.headerText = 'Users'
  }

}
