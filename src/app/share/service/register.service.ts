import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Register} from '../model/register.models';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

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
}
