import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnectComponent} from './connect/connect.component';
import {RegisterComponent} from './register/register.component';
import {MembershipComponent} from './membership/membership.component';
import {AdminComponent} from './admin/admin.component';
import {AdminRegisterComponent} from './admin/admin-register/admin-register.component';
import {AdminPlanningComponent} from './admin/admin-planning/admin-planning.component';
import {AdminContestComponent} from './admin/admin-contest/admin-contest.component';
import {AdminRegisterEditComponent} from './admin/admin-register/admin-register-edit/admin-register-edit.component';

const routes: Routes = [
  {path: 'connect', component: ConnectComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'membership', component: MembershipComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin-register', component: AdminRegisterComponent},
  {path: 'admin-planning', component: AdminPlanningComponent},
  {path: 'admin-contest', component: AdminContestComponent},
  {path: 'admin-register-edit', component: AdminRegisterEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
