import { Component, OnInit } from '@angular/core';

import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  room: any;

  constructor(
    private mainService: MainService
  ) {  }

  ngOnInit() {
    this.getRoom();
  }

  getRoom() {
    this.mainService.getData('room')
      .then((data:any) => {
        this.room = data.data;
      }).catch((err:any) => {
        this.room = err.message;
      });
  }

}
