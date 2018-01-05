import { Injectable } from '@angular/core';
import {RegisterUser} from '../models/RegisterUser';
import {HttpClient} from '@angular/common/http';

const Api_Url = 'http://localhost:50203/';



@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) { }

  register(regUserData: RegisterUser){
    return this._http.post(`${Api_Url}/api/Account/Register`, regUserData);
  }

}
