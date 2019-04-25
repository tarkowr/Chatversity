import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { AuthService } from '../../Core/_services/auth.service'
import { ActivatedRoute, Router } from '@angular/router'
import { MessagingService } from '../../Core/_services/messaging.service'
import { ClipboardService } from 'ngx-clipboard'
import * as CryptoTS from 'crypto-ts'

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


  copy(text: string) {
    this._clipboardService.copyFromContent(text)
    console.log(text)
  }


  genInviteLink() {
    // Encrypt
    var ciphertext = CryptoTS.AES.encrypt('my message', 'secret key 123')

    // Decrypt
    var bytes  = CryptoTS.AES.decrypt(ciphertext.toString(), 'secret key 123')
    var plaintext = bytes.toString(CryptoTS.enc.Utf8)

    console.log(plaintext)

    const roomId = this.room.id.toString()
    console.log(roomId)

    const cipherText = CryptoTS.AES.encrypt('hello world', 'mykey')

      const decryptedString =  CryptoTS.AES.decrypt(cipherText, 'mykey')

      console.log(decryptedString)

    // this.roomInviteLink = 'chatversity.app/chatkit/invite/' +
    // encodeURIComponent(encryptedString)

    console.log(this.room.id)

    // this.roomInviteLink = encodeURIComponent(linkText)
    console.log(this.roomInviteLink)
    // const randomRoomInviteString = window.crypto.getRandomValues(new Int32Array(1))[0].toString()
    // console.log(randomRoomInviteString)
    // CryptoTS.AES.encrypt(randomRoomInviteString, 'secret key').toString()
  }

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
    console.log(CryptoTS.AES.encrypt('secret message', 'secret key').toString())

    this.authService.getCurrentUser().subscribe((user) => {
      this.currentUser = user
    })

    this.returnUrl = '/login'
  }
}
