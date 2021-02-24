import { TestBed } from '@angular/core/testing';

import { CoursecontentService } from './coursecontent.service';

describe('CoursecontentService', () => {
  let service: CoursecontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursecontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
