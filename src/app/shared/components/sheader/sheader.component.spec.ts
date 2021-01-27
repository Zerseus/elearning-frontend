import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheaderComponent } from './sheader.component';

describe('SheaderComponent', () => {
  let component: SheaderComponent;
  let fixture: ComponentFixture<SheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
