import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegisterEditComponent } from './admin-register-edit.component';

describe('AdminRegisterEditComponent', () => {
  let component: AdminRegisterEditComponent;
  let fixture: ComponentFixture<AdminRegisterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegisterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegisterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
