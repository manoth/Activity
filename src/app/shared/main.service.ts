import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(
    private http: Http,
    private authHttp: AuthHttp,
    @Inject('API_URL') private url: string,
    @Inject('SIGNIN_URL') private signin_url: string
  ) { }

  postData(path: string, objData: string) {
    return new Promise((resolve, reject) => {
      let url = `${this.url}/${path}`;
      this.http.post(url, { objData: objData })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        })
    });
  }

  getDate(path: string) {
    return new Promise((resolve, reject) => {
      let url = `${this.url}/${path}`;
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        })
    });
  }

  postAuthHttp(path: string, objData: string) {
    return new Promise((resolve, reject) => {
      let url = `${this.url}/${path}`;
      this.authHttp.post(url, { objData: objData })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        })
    });
  }

  getAuthHttp(path: string) {
    return new Promise((resolve, reject) => {
      let url = `${this.url}/${path}`;
      this.authHttp.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        })
    });
  }

  logout() {
    localStorage.removeItem('token-jwt');
  }

  isToken() {
    let token = localStorage.getItem('token-jwt');
    if (token) {
      if (!this.jwtHelper.isTokenExpired(token)) {
        return this.jwtHelper.decodeToken(token);
      } else {
        this.logout();
        return false;
			}
    }
  }

  loginPath(onPath: string) {
    let followup = this.fullPath();
    let client = this.utoa('cpho#005');
    return `${this.signin_url}/${onPath}/?followup=${followup}&cli=${client}`;
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

  data() {
    return [
      { room_id: 'R01', room_name: 'ห้องประชุม 1', room_amount: 60, room_icon: 'mdi-clipboard-text' },
      { room_id: 'R02', room_name: 'ห้องประชุม 2', room_amount: 60, room_icon: 'mdi-clipboard-text' },
      { room_id: 'R03', room_name: 'ห้องประชุม 3', room_amount: 60, room_icon: 'mdi-clipboard-text' },
      { room_id: 'R04', room_name: 'ห้องประชุม 4', room_amount: 60, room_icon: 'mdi-clipboard-text' }
    ];
  }


  getTest() {
    let data = new Promise((resolve, reject) => {
      let url = `https://jsonplaceholder.typicode.com/users`;
      this.http.get(url).map(res => res.json()).subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        })
    });

    return data;
  }

}