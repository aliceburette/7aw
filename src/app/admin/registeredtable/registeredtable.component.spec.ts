import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredtableComponent } from './registeredtable.component';

describe('RegisteredtableComponent', () => {
  let component: RegisteredtableComponent;
  let fixture: ComponentFixture<RegisteredtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
