import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { AuthService } from '../../Core/_services/auth.service'
import { ActivatedRoute, Router } from '@angular/router'
import { MessagingService } from '../../Core/_services/messaging.service'
import { ClipboardService } from 'ngx-clipboard'
import * as CryptoJS from 'crypto-ts'

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



  displayInviteUser() {

  }


  ngOnInit() {

    console.log(CryptoJS.AES.encrypt('secret message', 'secret key').toString())

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
