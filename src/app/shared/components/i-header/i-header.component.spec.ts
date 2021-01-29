import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IHeaderComponent } from './i-header.component';

describe('IHeaderComponent', () => {
  let component: IHeaderComponent;
  let fixture: ComponentFixture<IHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
