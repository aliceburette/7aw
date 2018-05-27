import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ConnectComponent } from './connect/connect.component';
import { RegisterComponent } from './register/register.component';
import { MembershipComponent } from './membership/membership.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { AdminPlanningComponent } from './admin/admin-planning/admin-planning.component';
import { AdminContestComponent } from './admin/admin-contest/admin-contest.component';
import { AdminMenubarComponent } from './admin/admin-menubar/admin-menubar.component';
import { AdminRegisterEditComponent } from './admin/admin-register/admin-register-edit/admin-register-edit.component';
import { RegisteredtableComponent } from './admin/registeredtable/registeredtable.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ConnectComponent,
    RegisterComponent,
    MembershipComponent,
    AdminComponent,
    AdminRegisterComponent,
    AdminPlanningComponent,
    AdminContestComponent,
    AdminMenubarComponent,
    AdminRegisterEditComponent,
    RegisteredtableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
