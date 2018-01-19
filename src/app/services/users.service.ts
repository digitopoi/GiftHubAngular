import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const ApiUrl = 'https://gifthubapi20180117092302.azurewebsites.net/';

@Injectable()
export class UsersService {

    constructor(private _http: HttpClient) { }

    getUsers() {
        return this._http.get(`${ApiUrl}api/ManageUsers`);
    }
}
