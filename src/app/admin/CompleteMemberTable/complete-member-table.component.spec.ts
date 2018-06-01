import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteMemberTableComponent } from './complete-member-table.component';

describe('CompleteMemberTableComponent', () => {
  let component: CompleteMemberTableComponent;
  let fixture: ComponentFixture<CompleteMemberTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteMemberTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteMemberTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
