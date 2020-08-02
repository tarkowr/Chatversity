import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { AuthService } from '../../Core/_services/auth.service'
import { ActivatedRoute, Router } from '@angular/router'
import { MessagingService } from '../../Core/_services/messaging.service'
import { ClipboardService } from 'ngx-clipboard'
import * as CryptoTS from 'crypto-ts'
import { environment } from '../../../environments/environment'

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
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessagingService,
    private _clipboardService: ClipboardService) { }

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
    console.log(text)
  }
  // ────────────────────────────────────────────────────────────────────────────────

  //
  // ─── GENERATE ROOM INVITE LINK ─────────────────────────────────────────────────────────
  //

  genInviteLink() {
    const secret = JSON.stringify({roomId: this.room.id})
    const passphrase = 'chatdev@16273849'

    const ciphertext = CryptoTS.AES.encrypt(secret, passphrase)
    this.roomInviteLink = environment.apiUrl + btoa(ciphertext.toString())
  }
  // ────────────────────────────────────────────────────────────────────────────────


  //
  // ─── CHECK IF USER CREATED THE ROOM ─────────────────────────────────────────────────────────
  //

  isRoomCreator() {
    if (!this.room) {
      return false
    }

    return (this.room.createdByUserId === this.currentUser.id) ? true : false
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
