import { TestBed } from '@angular/core/testing';

import { ReverseGuard } from './reverseguard.service';

describe('ReverseGuard', () => {
  let service: ReverseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReverseGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
