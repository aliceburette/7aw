import { Component, OnInit } from '@angular/core';
import {GroupService} from '../../../share/service/group.service';
import {Group} from '../../../share/model/group.models';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-group-edit',
  templateUrl: './admin-group-edit.component.html',
  styleUrls: ['./admin-group-edit.component.scss']
})
export class AdminGroupEditComponent implements OnInit {
  public group: Group;
  public idGroup: number;

  constructor(private route: ActivatedRoute, private groupService: GroupService) { }

  ngOnInit() {
    this.idGroup = parseInt(this.route.snapshot.paramMap.get('idGroup'), 0);
    console.log(this.idGroup);
    this.groupService.getGroup(this.idGroup).subscribe(group => {
      this.group = group;
      console.log(group);
    });
  }

  setName(event) {
    this.group.nom = event.target.value;
  }

  setDescription(event) {
    this.group.description = event.target.value;
  }

  send() {
    console.log(this.group);
    this.groupService.update(this.group).subscribe();
  }

}
