import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnectComponent} from './connect/connect.component';
import {RegisterComponent} from './register/register.component';
import {MembershipComponent} from './membership/membership.component';
import {AdminComponent} from './admin/admin.component';
import {AdminMemberComponent} from './admin/admin-member/admin-member.component';
import {AdminMemberEditComponent} from './admin/admin-member/admin-member-edit/admin-member-edit.component';
import {AdminGroupComponent} from './admin/admin-group/admin-group.component';
import {AdminGroupCreationComponent} from './admin/admin-group/admin-group-creation/admin-group-creation.component';
import {AdminGroupEditComponent} from './admin/admin-group/admin-group-edit/admin-group-edit.component';
import {AdminSlotComponent} from './admin/admin-slot/admin-slot.component';
import {MembersComponent} from './members/members.component';

const routes: Routes = [
  {path: 'connect', component: ConnectComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'membership', component: MembershipComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin-member', component: AdminMemberComponent},
  {path: 'admin-member/:idMember', component: AdminMemberEditComponent},
  {path: 'admin-group', component: AdminGroupComponent},
  {path: 'admin-group-creation', component: AdminGroupCreationComponent},
  {path: 'admin-group/:idGroup', component: AdminGroupEditComponent},
  {path: 'admin-slot', component: AdminSlotComponent},
  {path: 'members', component: MembersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
