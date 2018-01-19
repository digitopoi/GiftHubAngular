import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastService {

    constructor(private _toastr: ToastrService) { }

    public handleError(err: HttpErrorResponse) {
        let errorMessage = '';

        if (err.status === 400) {
            errorMessage = 'Oops! Recheck your form.';
        }
        if (err.status === 500) {
            errorMessage = 'Our server failed!';
        }
        this._toastr.error('', errorMessage, {
            timeOut: 2500,
            positionClass: 'toast-bottom-center',
        });
    }

    public loginToast() {
        this._toastr.success('', 'Logged in!', {
            timeOut: 2500,
            positionClass: 'toast-bottom-center',
        });
    }

    public addCardToast() {
        this._toastr.success('Thank you!');
    }

    public addCompanyToast() {
        this._toastr.success('Company added.');
    }

}
