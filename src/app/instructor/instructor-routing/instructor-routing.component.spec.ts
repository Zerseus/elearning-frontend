import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorRoutingComponent } from './instructor-routing.component';

describe('InstructorRoutingComponent', () => {
  let component: InstructorRoutingComponent;
  let fixture: ComponentFixture<InstructorRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
