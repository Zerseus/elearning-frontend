import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorUpdateDetailsComponent } from './instructor-update-details.component';

describe('InstructorUpdateDetailsComponent', () => {
  let component: InstructorUpdateDetailsComponent;
  let fixture: ComponentFixture<InstructorUpdateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorUpdateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorUpdateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
