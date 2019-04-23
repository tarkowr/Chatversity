import { Component, OnInit, Input } from '@angular/core'
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
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

  searchForm: FormGroup
  loading = false
  submitted = false
  userResults: any
  roomResults: any
  users: any
  user: any
  rooms: any
  currUser: any

  constructor(private formBuilder: FormBuilder, private _userService: UserService, private _msgService: MessagingService,
    private authService: AuthService) { }

  //
  // ─── CONVENIENCE GETTER FOR EASY ACCESS TO FORM FIELDS ──────────────────────────
  //

  get f() { return this.searchForm.controls }

  //
  // ─── RETURN USER FROM FRIEND LIST ───────────────────────────────────────────────
  //

  getUser(_id: number): any {
    return this.users.find(c => c.id === _id)
  }
  // ────────────────────────────────────────────────────────────────────────────────

  //
  // ─── RETURN USER FROM FRIEND LIST ───────────────────────────────────────────────
  //

  getRoom(_id: number): any {
    return this.rooms.find(r => r.id === _id)
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── SORT CONNECTIONS LIST ──────────────────────────────────────────────────────
  //

  sortList(users: any) {
    return  users.sort((a, b) => ((a.firstName.toLowerCase() + ' ' + a.lastName.toLowerCase())
    > (b.firstName.toLowerCase() + ' ' + b.lastName.toLowerCase()) ? 1 : -1))
  }
  // ────────────────────────────────────────────────────────────────────────────────

  //
  // ─── FILTER LIST OF USERS BY NAME ───────────────────────────────────────────────
  //

  getUsersByName(_name: string) {
    _name = _name.toLowerCase()
    this.userResults = this.users.filter(c =>
      c.name.toLowerCase().includes(_name))
  }
  // ────────────────────────────────────────────────────────────────────────────────

  //
  // ─── FILTER LIST OF USERS BY NAME ───────────────────────────────────────────────
  //

  getRoomsByName(_name: string) {
    _name = _name.toLowerCase()
    this.roomResults = this.rooms.filter(r =>
      r.name.includes(_name)).slice(0, 5)
  }
  // ────────────────────────────────────────────────────────────────────────────────

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
      // this.getRoomsByName(query)
    }

    this.loading = false
  }
  // ────────────────────────────────────────────────────────────────────────────────

  //
  // ─── HANDLE CLICK USER BUTTON ───────────────────────────────────────────────────
  //

  setUser(_user: any) {
    console.log(_user)
    this.user = _user
  }
// ─────────────────────────────────────────────────────────────────

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(
      (user) => {
        this.currUser = user
        console.log('CHATKIT USER:', this.currUser)

        this._userService.getAll()
        .toPromise()
        .then((data) => {
          console.log('RESPONSE:', data)
          this.users = data
        })
        .catch((error) => {
          console.log(error)
        })
      }
    )



    //
    // ─── SETUP SEARCH BOX ────────────────────────────────────────────
    //

    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required]
    })
  // ─────────────────────────────────────────────────────────────────
  }

}
