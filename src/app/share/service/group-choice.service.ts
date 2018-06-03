import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GroupChoice} from '../model/groupChoice.models';
import {Member} from '../model/member.models';

@Injectable({
  providedIn: 'root'
})
export class GroupChoiceService {

  constructor(private http: HttpClient) { }

  create(groupChoice: GroupChoice) {
  return this.http.post<GroupChoice>('api/groupChoice/create', groupChoice);
  }
}
