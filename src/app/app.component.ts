import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  loginPage: string;
  regitPage: string;

  token: boolean = false;

  ngOnInit() {
    this.loginPage = this.loginPath('signin');
    this.regitPage = this.loginPath('signup');
  }

  loginPath(onPath: string) {
    let followup = this.fullPath();
    let client = this.utoa('cpho#005');
    return `http://203.157.182.15/accountsv2/${onPath}/?followup=${followup}&cli=${client}`;
  }

  fullPath() {
    return window.location.href;
  }

  // ucs-2 string to base64 encoded ascii
  utoa(str) {
    return window.btoa(str).replace('=','');
  }
  // base64 encoded ascii to ucs-2 string
  atou(str) {
    return window.atob(str.replace('=',''));
  }
}
