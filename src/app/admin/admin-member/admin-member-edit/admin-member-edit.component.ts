import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../../../share/service/member.service';
import {Member} from '../../../share/model/member.models';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-member-edit',
  templateUrl: './admin-member-edit.component.html',
  styleUrls: ['./admin-member-edit.component.scss']
})
export class AdminMemberEditComponent implements OnInit {

  public idMember: number;
  public member: Member;

  constructor(private route: ActivatedRoute, private memberService: MemberService, private router: Router) { }

  ngOnInit() {
    this.idMember = parseInt(this.route.snapshot.paramMap.get('idMember'), 0);
    console.log(this.idMember);
    this.memberService.getMember(this.idMember).subscribe(member => {
      this.member = member;
      console.log(member);
  });
  }

  setLastname(event) {
    this.member.nom = event.target.value;
  }

  setFirstname(event) {
    this.member.prenom = event.target.value;
  }

  setBirthday(event) {
    this.member.date_naissance = event.target.value;
  }

  setEmail(event) {
    this.member.email = event.target.value;
  }

  setPhone(event) {
    this.member.telephone = event.target.value;
  }

  setLicence(event) {
    this.member.num_licence = event.target.value;
  }

  setCheck(event) {
    if (event.target.value == 0) {
      event.target.value = 1;
    } else {
      event.target.value = 0;
    }
    console.log(event.target.value);
    this.member.en_regle = event.target.value;
  }

  send() {
    console.log(this.member);
    this.memberService.update(this.member).subscribe();
  }

  delete() {
    this.memberService.delete(this.member.id_adherent).subscribe(res => {
      this.router.navigate(['/admin-member']);
    });
  }
}
