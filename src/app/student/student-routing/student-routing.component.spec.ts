import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRoutingComponent } from './student-routing.component';

describe('StudentRoutingComponent', () => {
  let component: StudentRoutingComponent;
  let fixture: ComponentFixture<StudentRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
