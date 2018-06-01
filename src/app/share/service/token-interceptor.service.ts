import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    const registerService = this.injector.get(RegisterService);
    const tokenizedReq = req.clone({
      setHeaders: { Authorization : `Bearer ${registerService.getToken()}`} });
    return next.handle(tokenizedReq);
  }
}
