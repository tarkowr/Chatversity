import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { AuthService } from '../../Core/_services/auth.service'
import { Router } from '@angular/router'
import { ClipboardService } from 'ngx-clipboard'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() viewName: string
  @Input() headerText: string
  @Input() room: any
  @Output() roomDeleted = new EventEmitter()
  @Output() leftRoom = new EventEmitter()

  returnUrl: string
  currentUser: any
  roomInviteLink: string
  href: string;

  constructor(private authService: AuthService,
    private router: Router,
    private _clipboardService: ClipboardService
  ) { }

  //
  // ─── HANDLE DELETE ROOM ─────────────────────────────────────────────────────────
  //

  deleteRoom(id) {
    this.roomDeleted.emit(id)
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── HANDLE LEAVE ROOM ─────────────────────────────────────────────────────────
  //

  leaveRoom(id) {
    this.leftRoom.emit(id)
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── COPY CLIPBOARD CONTENTS ─────────────────────────────────────────────────────────
  //

  copy(text: string) {
    this._clipboardService.copyFromContent(text)
  }
  // ────────────────────────────────────────────────────────────────────────────────

  //
  // ─── CHECK IF USER CREATED THE ROOM ─────────────────────────────────────────────────────────
  //

  isRoomCreator() {
    if (!this.room) {
      return false
    }

    return this.room.createdByUserId === this.currentUser.id
  }
  // ────────────────────────────────────────────────────────────────────────────────

  ngOnInit() {
    this.authService.getCurrentUser().subscribe((user) => {
      this.currentUser = user
    })

    this.href = this.router.url

    this.returnUrl = '/login'
  }
}
