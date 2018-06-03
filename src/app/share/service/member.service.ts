import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Member} from '../model/member.models';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getComplete(): Observable<any> {
    return this.http.get<any>('api/member/getComplete');
  }

  getIncomplete(): Observable<any> {
    return this.http.get<any>('api/member/getIncomplete');
  }

  getByRegister(): Observable<any> {
    return this.http.get<any>('api/member/getByRegister');
  }

  create(member: Member) {
    return this.http.post<Member>('api/member/create', member);
  }

  getMember(idMember: number): Observable<any> {
    return this.http.get<any>('api/member/' + idMember);
  }

  update(member: Member) {
    return this.http.put('api/member/update', member);
  }

  delete(idMember: number) {
    console.log(idMember);
    return this.http.delete('api/member/delete/' + idMember);
  }
}
