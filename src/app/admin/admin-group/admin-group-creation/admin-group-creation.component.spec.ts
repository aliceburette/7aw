import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGroupCreationComponent } from './admin-group-creation.component';

describe('AdminGroupCreationComponent', () => {
  let component: AdminGroupCreationComponent;
  let fixture: ComponentFixture<AdminGroupCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGroupCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGroupCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
