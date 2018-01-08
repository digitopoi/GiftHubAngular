import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Api_Url = 'http://localhost:50203';

@Injectable()
export class CardService {

  constructor(private _http: HttpClient) { }

  getCard(){
    return this._http.get(`${Api_Url}/Card` , { headers: this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

}
