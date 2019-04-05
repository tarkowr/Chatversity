import { Component, OnInit, Input } from '@angular/core';
import { MessagingService } from '../../Core/_services/messaging.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  notificationCount: number;

  constructor(private msgService: MessagingService) { }

  ngOnInit() {
    this.msgService.notificationCount.subscribe(notification => this.notificationCount = notification);
  }

}
