import { Injectable } from '@angular/core';
import {RegisterUser} from '../models/RegisterUser';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpHeaderResponse } from '@angular/common/http/src/response';
import { Subject } from 'rxjs/Subject';
import { ToastrService } from 'ngx-toastr';
import { ToastService } from './toast.service';


const Api_Url = 'https://gifthubapi20180117092302.azurewebsites.net';



@Injectable()
export class AuthService {
  userInfo = new Subject<{}>();
  isLoggedIn = new Subject<boolean>();
  isAdmin: boolean;

  constructor(private _http: HttpClient, private _router: Router, private _toast: ToastService, public toast: ToastrService) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/api/Account/Register`, regUserData);
  }


  login(loginInfo) {
    console.log(loginInfo);
    const str = `grant_type=password&username=${encodeURI(loginInfo.username)}&password=${encodeURI(loginInfo.password)}`;

    return this._http.post(`${Api_Url}/Token`, str).subscribe((token: Token) => {
      localStorage.setItem('id_token', token.access_token);
      localStorage.setItem('user', token.userName);
      this.userInfo.next({
        isloggedin: true,
        user: token.userName
      });
      this._router.navigate(['/admin']);
      this._toast.loginToast();
    }, error => this._toast.handleError(error));

  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }

    return this._http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeader() });
  }


  logout(): Observable<Object> {
    localStorage.clear();
    this.isLoggedIn.next(false);

    return this._http.post(`${Api_Url}/api/Account/Logout`, { headers: this.setHeader() } );
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

}


