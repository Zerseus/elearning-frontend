import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseContentListComponent } from './course-content-list.component';

describe('CourseContentListComponent', () => {
  let component: CourseContentListComponent;
  let fixture: ComponentFixture<CourseContentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseContentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
