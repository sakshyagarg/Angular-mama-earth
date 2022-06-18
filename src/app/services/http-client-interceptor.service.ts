import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    console.log(token);

    if (token) {
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });

      return next.handle(clonedRequest);
    } else {
      return next.handle(req);
    }
  }
}
