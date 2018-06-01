import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MemberService} from '../share/service/member.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {

  public membershipForm: FormGroup;

  constructor(private fb: FormBuilder, private memberService: MemberService) { }

  ngOnInit() {

    this.membershipForm = this.fb.group({
      id_adherent: [''],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      date_naissance: ['', Validators.required],
      num_licence: [''],
      en_regle: [''],
      id_utilisateur: [1],
      id_groupe: [''],
      email: ['', Validators.required],
      telephone: ['', Validators.required]
    });
  }

  send() {
    this.memberService.create(this.membershipForm.value).subscribe();
  }

}
