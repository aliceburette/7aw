import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../share/service/register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  connectForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {}

  ngOnInit() {
    this.connectForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginUser() {
    console.log(this.connectForm.value);
    this.registerService.login(this.connectForm.value).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('admin', res.admin);
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
