import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GroupService} from '../../../share/service/group.service';

@Component({
  selector: 'app-admin-group-creation',
  templateUrl: './admin-group-creation.component.html',
  styleUrls: ['./admin-group-creation.component.scss']
})

export class AdminGroupCreationComponent implements OnInit {

  public groupForm: FormGroup;

  constructor(private fb: FormBuilder, private groupService: GroupService) { }

  ngOnInit() {

    this.groupForm = this.fb.group( {
      id_groupe: [''],
      nom: ['', Validators.required],
      description: ['']
      });
  }

  send() {
    this.groupService.create(this.groupForm.value).subscribe();
  }

}
