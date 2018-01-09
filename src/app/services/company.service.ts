import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../models/Company';

const Api_Url = 'http://localhost:50203/Api';

@Injectable()
export class CompanyService {

  constructor(private _http: HttpClient) { }

  getCompanies() {
    return this._http.get(`${Api_Url}/Company`, { headers: this.getHeaders()});
  }

  createCompany(card: Company) {
    return this._http.post(`${Api_Url}/Company`, card, {headers: this.getHeaders()});
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

}
