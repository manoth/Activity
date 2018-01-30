import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fristName: string = 'Manoth';
  lastName: string = 'Klangphila';
  age: number = 30;
  arr: Array<any> = [ a=>5, b=>'5', c=>'Too' ];
  obj: object = { a: 5, b: '5', c: 'Too' };
  data: Array<any> = [];

  chk: boolean = false;

  constructor() { 
    let x = 10;
    let y = 9;
    console.log(x+y);
    // console.log(this.data);
  }

  ngOnInit() {

  }

  saveData(f: any) {
    console.log(f);
    if (f) {
      this.chk = true;
    }
    this.data.push(f);
  }

}
