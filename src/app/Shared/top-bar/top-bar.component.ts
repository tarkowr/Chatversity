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
  @Input() roomId: string
  @Output() roomDeleted = new EventEmitter()

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


  copy(text: string) {
    this._clipboardService.copyFromContent(text)
    console.log(text)
  }


  genInviteLink() {

    const secret = JSON.stringify({roomId: this.roomId})

    // Encrypt
    var ciphertext = CryptoTS.AES.encrypt(secret, '12345678901234567890')

    // Decrypt
    var bytes  = CryptoTS.AES.decrypt(ciphertext.toString(), '12345678901234567890')
    var plaintext = bytes.toString(CryptoTS.enc.Utf8)

    console.log(plaintext)

    this.roomInviteLink = btoa(ciphertext.toString())
    console.log(this.roomInviteLink)
  }


  ngOnInit() {

    console.log(CryptoTS.AES.encrypt('secret message', 'secret key').toString())

    this.authService.getCurrentUser().subscribe((user) => {

      this.currentUser = user
    })

    this.returnUrl = '/login'
  }

  // Logout user
  logOut() {
    this.authService.logout()
    this.router.navigate([this.returnUrl])
  }

}
