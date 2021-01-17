import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRoutingComponent } from './course-routing.component';

describe('CourseRoutingComponent', () => {
  let component: CourseRoutingComponent;
  let fixture: ComponentFixture<CourseRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
