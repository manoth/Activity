import { Component, OnInit } from '@angular/core';

import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  room: Array<any>;

  constructor(
    private mainService: MainService
  ) {  }

  ngOnInit() {
    this.room = this.mainService.data();
  }

}
