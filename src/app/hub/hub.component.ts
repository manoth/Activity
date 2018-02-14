import { Component, OnInit } from '@angular/core';

import { CrossStorageHub } from 'cross-storage';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {

  constructor() { 
    CrossStorageHub.init([
      {origin: /203.157.182.15$/, allow: ['get', 'set', 'del', 'getKeys', 'clear']}
    ]);
  }

  ngOnInit() {
  }

}