import { Component, OnInit } from '@angular/core';
import {Member} from '../../share/model/member.models';
import {Observable} from 'rxjs/internal/Observable';
import {MemberService} from '../../share/service/member.service';

@Component({
  selector: 'app-incomplete-member-table',
  templateUrl: './incomplete-member-table.component.html',
  styleUrls: ['./incomplete-member-table.component.scss']
})
export class IncompleteMemberTableComponent implements OnInit {
  incompleteMember: Observable<Member[]>;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.memberService.getIncomplete().subscribe(member => {
      this.incompleteMember = member;
      console.log(member);
    });
  }

}
