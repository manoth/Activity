import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-meetingroom',
  templateUrl: './meetingroom.component.html',
  styleUrls: ['./meetingroom.component.css']
})
export class MeetingroomComponent implements OnInit {

  hello: string;
  data: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.hello = 'Hello, ' + params.id;
    });
    this.getData();
  }

  getData() {
    this.mainService.getTest().then((data) => {
      this.data = data;
    }).catch((err) => {
      this.data = err;
    });
  }

}
