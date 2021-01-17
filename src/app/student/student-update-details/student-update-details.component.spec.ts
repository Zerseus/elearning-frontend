import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUpdateDetailsComponent } from './student-update-details.component';

describe('StudentUpdateDetailsComponent', () => {
  let component: StudentUpdateDetailsComponent;
  let fixture: ComponentFixture<StudentUpdateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentUpdateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUpdateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
