import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInjectorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const secretToken = 'tokenTest123';
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `${secretToken}`),
    });
    return next.handle(modifiedReq);
  }
}
