import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from '../models/Card';

const Api_Url = 'http://gifthubapi20180117092302.azurewebsites.net/Api';

@Injectable()
export class CardService {

  constructor(private _http: HttpClient) { }

  getCard() {
    return this._http.get(`${Api_Url}/Card`);
  }

  getDonation() {
    return this._http.get(`${Api_Url}/TotalDonations`);
  }

  createCard(card: Card) {
    return this._http.post(`${Api_Url}/Card`, card);
  }

  getExpirations() {
    return this._http.get(`${Api_Url}/Expirations`);
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  GetCompaniesDropdown(){
    return this._http.get(`${Api_Url}/CompanyNames`,{headers: this.getHeaders()})
  }

}
