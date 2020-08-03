import { Component, OnInit, Input } from '@angular/core'
import { FormGroup, FormBuilder, Validators  } from '@angular/forms'
import { UserService } from '../../Core/_services/user.service'
import { MessagingService } from '../../Core/_services/messaging.service'
import { AuthService } from '../../Core/_services/auth.service'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input() userType: boolean
  @Input() roomType: boolean

  currUser: any

  searchForm: FormGroup
  loading = false
  submitted = false

  userResults: any
  roomResults: any

  users: any
  selectedUser: any
  rooms: any
  selectedRoom: any

  constructor(
    private formBuilder: FormBuilder, 
    private _userService: UserService, 
    private _msgService: MessagingService,
    private authService: AuthService,
  ) { }

  get f() { return this.searchForm.controls }

  //
  // ─── RETURN USER FROM FRIEND LIST BY ID ───────────────────────────────────────────────
  //

  getUser(_id: number): any {
    return this.users.find(c => c.id === _id)
  }
  // ────────────────────────────────────────────────────────────────────────────────

  //
  // ─── RETURN ROOM FROM ROOMS BY ID ───────────────────────────────────────────────
  //

  getRoom(_id: number): any {
    return this.rooms.find(r => r.id === _id)
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── FILTER LIST OF USERS BY NAME ───────────────────────────────────────────────
  //

  getUsersByName(_name: string) {
    this.userResults = this.search(_name, this.users)
  }
  // ────────────────────────────────────────────────────────────────────────────────

  //
  // ─── FILTER LIST OF ROOMS BY NAME ───────────────────────────────────────────────
  //

  getRoomsByName(_name: string) {
     this.roomResults = this.search(_name, this.rooms)
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── HELPER SEARCH METHOD ─────────────────────────────────────────────────────────────
  //

  search(_query: string, _data: any) {
    const _length = _query.length
    _query = _query.toLowerCase()

    return _data.filter(d =>
      d.name.toLowerCase().substring(0, _length).includes(_query)).splice(0, 5)
  }


  //
  // ─── HANDLE SEARCH ─────────────────────────────────────────────────────────────
  //

  onSearch() {
    this.submitted = true
    this.loading = true

    if (this.searchForm.invalid) {
      this.submitted = false
      this.loading = false
      return
    }

    const query: string = this.searchForm.get('search').value

    if (this.userType) {
      this.getUsersByName(query)
    }

    if (this.roomType) {
      this.getRoomsByName(query)
    }

    this.loading = false
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── HANDLE CLICK USER BUTTON ───────────────────────────────────────────────────
  //

  setUser(_user: any) {
    this.selectedUser = _user
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── CHECK IF USERS ARE CONNECTED ───────────────────────────────────────────────────
  //
  checkIfConnected(_id: any) {
    if (!this.currUser.customData) {
      return false
    }

    if (this.currUser.id === _id) {
      return false
    }

    return (this.currUser.customData.connections.includes(_id.toString())) ? true : false
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── HANDLE CLICK ROOM BUTTON ───────────────────────────────────────────────────
  //

  setRoom(_room: any) {
    this.selectedRoom = _room
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── HANDLE JOIN ROOM ───────────────────────────────────────────────────
  //

  joinRoom(_room: any) {
    this._msgService.joinRoom(this.currUser, _room.id).then((room) => {
      this._msgService.subscribeToRoom(this.currUser, room.id)
    }).catch(err => {})
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── CHECK IF USER IS IN ROOM ───────────────────────────────────────────────────
  //
  checkIfInRoom(_id: any) {
    if (!this.currUser.roomSubscriptions) {
      return false
    }

    return this.currUser.roomSubscriptions[_id]
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── CHECKS IF USER IS ONLINE ───────────────────────────────────────────────────
  //

  isUserOnline(_id: any) {
    return this.currUser.presenceStore[_id] === 'online'
  }
  // ─────────────────────────────────────────────────────────────────


  //
  // ─── RETURNS USER ACTIVITY STATUS ───────────────────────────────────────────────────
  //

  getUserActivityStatus(_id: any) {
    return (this.currUser.presenceStore[_id] === 'online') ? 'Online' : 'Offline'
  }
  // ─────────────────────────────────────────────────────────────────


  ngOnInit() {
    this.authService.getCurrentUser().subscribe(
      (user) => {
        this.currUser = user

        if (this.userType) {
          this._userService.getAll()
          .toPromise()
          .then((data) => {
            this.users = data
          })
          .catch((error) => {})
        }
        else if (this.roomType) {
          this._msgService.getAllRooms()
          .toPromise()
          .then((data) => {
            this.rooms = data
          })
          .catch((error) => {})
        }
     })

    this.searchForm = this.formBuilder.group({
      search: ['', Validators.compose([Validators.required, Validators.maxLength(100)])]
    })
  }

}
