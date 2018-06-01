import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ConnectComponent } from './connect/connect.component';
import { RegisterComponent } from './register/register.component';
import { MembershipComponent } from './membership/membership.component';
import { AdminComponent } from './admin/admin.component';
import { AdminMemberComponent } from './admin/admin-member/admin-member.component';
import { AdminMenubarComponent } from './admin/admin-menubar/admin-menubar.component';
import { AdminMemberEditComponent } from './admin/admin-member/admin-member-edit/admin-member-edit.component';
import { CompleteMemberTableComponent } from './admin/CompleteMemberTable/complete-member-table.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IncompleteMemberTableComponent } from './admin/IncompleteMemberTable/incomplete-member-table.component';
import { AdminGroupComponent } from './admin/admin-group/admin-group.component';
import { AdminGroupCreationComponent } from './admin/admin-group/admin-group-creation/admin-group-creation.component';
import { AdminGroupEditComponent } from './admin/admin-group/admin-group-edit/admin-group-edit.component';
import { AdminSlotComponent } from './admin/admin-slot/admin-slot.component';
import { MembersComponent } from './members/members.component';
import {TokenInterceptorService} from './share/service/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ConnectComponent,
    RegisterComponent,
    MembershipComponent,
    AdminComponent,
    AdminMemberComponent,
    AdminMenubarComponent,
    AdminMemberEditComponent,
    CompleteMemberTableComponent,
    IncompleteMemberTableComponent,
    AdminGroupComponent,
    AdminGroupCreationComponent,
    AdminGroupEditComponent,
    AdminSlotComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide : HTTP_INTERCEPTORS, useClass : TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
