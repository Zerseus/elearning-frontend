import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiComponent } from './restapi.component';

describe('RestapiComponent', () => {
  let component: RestApiComponent;
  let fixture: ComponentFixture<RestApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
