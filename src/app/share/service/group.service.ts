import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Group} from '../model/group.models';
import {Member} from '../model/member.models';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>('api/group/getAll');
  }

  create(group: Group) {
    return this.http.post<Group>('api/group/create', group);
  }

  getGroup(idGroup: number): Observable<any> {
    return this.http.get<any>('api/group/' + idGroup);
  }

  update(group: Group) {
    return this.http.put('api/group/update', group);
  }
}
