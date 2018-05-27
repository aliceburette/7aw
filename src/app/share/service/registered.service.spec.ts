import { TestBed, inject } from '@angular/core/testing';

import { RegisteredService } from './registered.service';

describe('RegisteredService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisteredService]
    });
  });

  it('should be created', inject([RegisteredService], (service: RegisteredService) => {
    expect(service).toBeTruthy();
  }));
});
