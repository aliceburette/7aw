import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGroupChoiceComponent } from './admin-group-choice.component';

describe('AdminGroupChoiceComponent', () => {
  let component: AdminGroupChoiceComponent;
  let fixture: ComponentFixture<AdminGroupChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGroupChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGroupChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
