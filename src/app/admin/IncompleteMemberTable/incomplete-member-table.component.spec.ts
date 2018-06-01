import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompleteMemberTableComponent } from './incomplete-member-table.component';

describe('IncompleteMemberTableComponent', () => {
  let component: IncompleteMemberTableComponent;
  let fixture: ComponentFixture<IncompleteMemberTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncompleteMemberTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncompleteMemberTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
