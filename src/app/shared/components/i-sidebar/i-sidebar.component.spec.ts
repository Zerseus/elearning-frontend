import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISidebarComponent } from './i-sidebar.component';

describe('ISidebarComponent', () => {
  let component: ISidebarComponent;
  let fixture: ComponentFixture<ISidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ISidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ISidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
