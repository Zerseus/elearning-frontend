import { TestBed } from '@angular/core/testing';

import { StudentguardService } from './studentguard.service';

describe('StudentguardService', () => {
  let service: StudentguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
