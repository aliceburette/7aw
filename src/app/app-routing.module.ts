import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnectComponent} from './connect/connect.component';
import {RegisterComponent} from './register/register.component';
import {MembershipComponent} from './membership/membership.component';
import {AdminMemberComponent} from './admin/admin-member/admin-member.component';
import {AdminMemberEditComponent} from './admin/admin-member/admin-member-edit/admin-member-edit.component';
import {AdminGroupComponent} from './admin/admin-group/admin-group.component';
import {AdminGroupCreationComponent} from './admin/admin-group/admin-group-creation/admin-group-creation.component';
import {AdminGroupEditComponent} from './admin/admin-group/admin-group-edit/admin-group-edit.component';
import {AdminSlotComponent} from './admin/admin-slot/admin-slot.component';
import {MembersComponent} from './members/members.component';
import {AuthGuard} from './auth.guard';
import {AdminGuard} from './admin.guard';
import {AdminGroupChoiceComponent} from './admin/admin-group/admin-group-choice/admin-group-choice.component';

const routes: Routes = [
  {path: 'connect', component: ConnectComponent},
  {path: '', component: ConnectComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'membership', component: MembershipComponent, canActivate: [AuthGuard]},
  {path: 'admin-member', component: AdminMemberComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'admin-member/:idMember', component: AdminMemberEditComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'admin-group', component: AdminGroupComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'admin-group-creation', component: AdminGroupCreationComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'admin-group/:idGroup', component: AdminGroupEditComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'admin-slot', component: AdminSlotComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'members', component: MembersComponent, canActivate: [AuthGuard]},
  {path: 'admin-group-choice', component: AdminGroupChoiceComponent, canActivate: [AuthGuard, AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
