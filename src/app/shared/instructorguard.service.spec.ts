import { TestBed } from '@angular/core/testing';

import { InstructorguardService } from './instructorguard.service';

describe('InstructorguardService', () => {
  let service: InstructorguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructorguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
