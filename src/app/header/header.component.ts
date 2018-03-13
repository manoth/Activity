import { Component, OnInit } from '@angular/core';

import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginPage: string;
  regitPage: string;
  profilePage: string;
  logoutPage: string;
  objPayload: Object;

  token: boolean = false;

  constructor(
    private mainService: MainService
  ) {
  }

  ngOnInit() {
    this.objPayload = this.mainService.isToken();
    // console.log(this.objPayload);

    this.loginPage = this.mainService.loginPath('signin');
    this.regitPage = this.mainService.loginPath('signup');
    this.profilePage = this.mainService.loginPath('profile');
    this.logoutPage = this.mainService.loginPath('logout'); 
  }

  logout() {
    this.mainService.logout();
  }

}
