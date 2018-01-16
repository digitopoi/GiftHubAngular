import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const ApiUrl = 'http://localhost:50203/';

@Injectable()
export class UsersService {

    constructor(private _http: HttpClient) { }

    getUsers() {
        return this._http.get(`${ApiUrl}api/ManageUsers`);
    }
}
