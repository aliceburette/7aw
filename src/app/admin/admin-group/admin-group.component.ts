import { Component, OnInit } from '@angular/core';
import {Group} from '../../share/model/group.models';
import {GroupService} from '../../share/service/group.service';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-admin-group',
  templateUrl: './admin-group.component.html',
  styleUrls: ['./admin-group.component.scss']
})
export class AdminGroupComponent implements OnInit {
  group: Observable<Group[]>;

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.groupService.getAll().subscribe(group => {
      this.group = group;
      console.log(group);
    });
  }

}
