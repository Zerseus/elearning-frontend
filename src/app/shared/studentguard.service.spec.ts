import { TestBed } from '@angular/core/testing';

import { StudentGuard } from './studentguard.service';

describe('StudentGuard', () => {
  let service: StudentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
