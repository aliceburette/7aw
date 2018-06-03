import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Register} from '../model/register.models';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private router: Router) { }

  create(registerUser: Register) {
    return this.http.post<any>('api/register/create', registerUser);
  }
  getToken() {
    return localStorage.getItem('token');
  }

  login(registerUser) {
    return this.http.post<any>('api/register/login', registerUser);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    this.router.navigate(['']);
  }

  isAdmin() {
    return (localStorage.getItem('admin') === '1');
  }
}
