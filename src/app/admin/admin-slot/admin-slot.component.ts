import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SlotService} from '../../share/service/slot.service';
import {Slot} from '../../share/model/slot.models';
import {Group} from '../../share/model/group.models';
import {GroupService} from '../../share/service/group.service';

@Component({
  selector: 'app-admin-slot',
  templateUrl: './admin-slot.component.html',
  styleUrls: ['./admin-slot.component.scss']
})
export class AdminSlotComponent implements OnInit {
  group: Group[];
  slotForm: FormGroup;

  constructor(private slotService: SlotService, private fb: FormBuilder, private groupService: GroupService) { }

  ngOnInit() {
    this.groupService.getAll().subscribe(group => {
      this.group = group;
      console.log(group);
    });
    this.slotForm = this.fb.group( {
      id_creneau: [''],
      jour: ['', Validators.required],
      heure_debut: ['', Validators.required],
      heure_fin: ['', Validators.required],
      encadrant: [''],
      id_groupe: ['']
    });
  }

  send() {
    this.slotService.create(this.slotForm.value).subscribe();
  }

}
