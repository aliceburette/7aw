import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Slot} from '../model/slot.models';

@Injectable({
  providedIn: 'root'
})
export class SlotService {

  constructor(private http: HttpClient) { }

  create(slot: Slot) {
    console.log(slot);
    return this.http.post<Slot>('api/slot/create', slot);
  }
}
