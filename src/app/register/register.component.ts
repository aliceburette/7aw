import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../share/service/register.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) { }

  ngOnInit() {

    this.registerForm = this.fb.group( {
      id_utilisateur: [''],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  send() {
    this.registerService.create(this.registerForm.value).subscribe(res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      },
      error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.router.navigate(['/connect']);
          }
        }
      }
    );
  }

}
