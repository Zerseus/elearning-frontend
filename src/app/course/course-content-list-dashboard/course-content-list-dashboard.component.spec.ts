import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseContentListDashboardComponent } from './course-content-list-dashboard.component';

describe('CourseContentListDashboardComponent', () => {
  let component: CourseContentListDashboardComponent;
  let fixture: ComponentFixture<CourseContentListDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseContentListDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseContentListDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
