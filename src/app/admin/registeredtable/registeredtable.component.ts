import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {Registered} from '../../share/model/registered.models';
import {RegisteredService} from '../../share/service/registered.service';

@Component({
  selector: 'app-registeredtable',
  templateUrl: './registeredtable.component.html',
  styleUrls: ['./registeredtable.component.scss']
})
export class RegisteredtableComponent implements OnInit {
  allRegistered: Observable<Registered[]>;

  constructor(private registeredService: RegisteredService) { }

  ngOnInit() {
    this.registeredService.getAllRegistered().subscribe(registered => {
      this.allRegistered = registered;
      console.log(registered);
    });
  }

}
