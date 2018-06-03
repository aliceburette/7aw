import { Component, OnInit } from '@angular/core';
import {Member} from '../../../share/model/member.models';
import {MemberService} from '../../../share/service/member.service';
import {GroupService} from '../../../share/service/group.service';
import {Group} from '../../../share/model/group.models';

@Component({
  selector: 'app-admin-group-edit',
  templateUrl: './admin-group-edit.component.html',
  styleUrls: ['./admin-group-edit.component.scss']
})
export class AdminGroupEditComponent implements OnInit {
  incompleteMember: Member[];
  group: Group;

  constructor(private memberService: MemberService, private groupService: GroupService) { }

  ngOnInit() {
    this.memberService.getIncomplete().subscribe(member => {
      this.incompleteMember = member;
      console.log(member);
    });
  }

  setName(event) {
    this.group.nom = event.target.value;
  }

  setDescription(event) {
    this.group.description = event.target.value;
  }

}
