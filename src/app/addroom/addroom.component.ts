import { Component, OnInit } from '@angular/core';

import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css']
})
export class AddroomComponent implements OnInit {

  room: any;
  party: any;
  roomType: any;

  constructor(
    private mainService: MainService
  ) { 
    this.getRoom();
    this.getParty();
    this.getRoomType();
  }

  ngOnInit() {
  }

  getRoom() {
    this.mainService.getData('room')
      .then((data: any) => {
        this.room = data.data;
      }).catch((err: any) => {
        this.room = err.message;
      });
  }

  getParty() {
    this.mainService.getData('party')
      .then((data: any) => {
        this.party = data.data;
      }).catch((err: any) => {
        this.party = err.message;
      });
  }

  getRoomType() {
    this.mainService.getData('roomtype')
      .then((data: any) => {
        this.roomType = data.data;
      }).catch((err: any) => {
        this.roomType = err.message;
      });
  }

}
