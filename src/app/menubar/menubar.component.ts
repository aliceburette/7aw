import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../share/service/register.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  constructor(public registerService: RegisterService) { }

  ngOnInit() {
  }

}
