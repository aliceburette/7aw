import { Component, OnInit } from '@angular/core';
import {MemberService} from '../share/service/member.service';
import {Observable} from 'rxjs/internal/Observable';
import {Member} from '../share/model/member.models';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  myMembers: Observable<Member[]>;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.memberService.getByRegister().subscribe(member => {
      this.myMembers = member;
      console.log(member);
    });
  }
}
