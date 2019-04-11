import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../Core/_models/user';
import { UserProfile } from '../../Core/_models/profile';

@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.css']
})
export class SmallComponent implements OnInit {
  
  @Input() user: User;
  @Input() isConnection: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  addConnection(){
    this.isConnection = true;
  }

}
