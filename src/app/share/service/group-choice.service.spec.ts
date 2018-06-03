import { TestBed, inject } from '@angular/core/testing';

import { GroupChoiceService } from './group-choice.service';

describe('GroupChoiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupChoiceService]
    });
  });

  it('should be created', inject([GroupChoiceService], (service: GroupChoiceService) => {
    expect(service).toBeTruthy();
  }));
});
