import { TestBed } from '@angular/core/testing';

import { BothGuard } from './bothguard.service';

describe('BothGuard', () => {
  let service: BothGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BothGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
