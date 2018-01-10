import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authHeader = req.clone({ headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)});
        return next.handle(authHeader);
    }
}