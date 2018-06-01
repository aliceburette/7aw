import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {Member} from '../../share/model/member.models';
import {MemberService} from '../../share/service/member.service';

@Component({
  selector: 'app-complete-member-table',
  templateUrl: './complete-member-table.component.html',
  styleUrls: ['./complete-member-table.scss']
})
export class CompleteMemberTableComponent implements OnInit {
  completeMember: Observable<Member[]>;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.memberService.getComplete().subscribe(member => {
      this.completeMember = member;
      console.log(member);
    });
  }

}
