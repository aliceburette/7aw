import { Component, OnInit } from '@angular/core';
import {Group} from '../../../share/model/group.models';
import {GroupService} from '../../../share/service/group.service';
import {MemberService} from '../../../share/service/member.service';
import {Member} from '../../../share/model/member.models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GroupChoiceService} from '../../../share/service/group-choice.service';

@Component({
  selector: 'app-admin-group-choice',
  templateUrl: './admin-group-choice.component.html',
  styleUrls: ['./admin-group-choice.component.scss']
})
export class AdminGroupChoiceComponent implements OnInit {

  public allGroups: Group[];
  public allMembers: Member[];
  public groupChoiceForm: FormGroup;

  constructor( private groupService: GroupService, private memberService: MemberService, private fb: FormBuilder, private groupChoiceService: GroupChoiceService) { }

  ngOnInit() {
    this.groupService.getAll().subscribe( group => {
      this.allGroups = group;
    });
    this.memberService.getIncomplete().subscribe( member => {
      this.allMembers = member;
    });
    this.groupChoiceForm = this.fb.group( {
      id_proposition: [''],
      id_groupe: ['', Validators.required],
      id_adherent: ['', Validators.required]
    });
  }

  changeGroup(event) {
    this.groupChoiceForm.get('id_groupe').setValue(event.target.value);
  }

  changeMember(event) {
    this.groupChoiceForm.get('id_adherent').setValue(event.target.value);
  }

  send() {
    console.log(this.groupChoiceForm.value);
    this.groupChoiceService.create(this.groupChoiceForm.value).subscribe();
  }

}
