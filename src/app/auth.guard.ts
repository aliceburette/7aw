import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {RegisterService} from './share/service/register.service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private registerService: RegisterService, private router: Router) {
  }

  canActivate(): boolean {
    if (this.registerService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/connect']);
      return false;

    }
  }
}
