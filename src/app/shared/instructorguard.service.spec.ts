import { TestBed } from '@angular/core/testing';

import { InstructorGuard } from './instructorguard.service';

describe('InstructorGuard', () => {
  let service: InstructorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructorGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
