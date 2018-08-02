import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyResultHomeComponent } from './weekly-result-home.component';

describe('WeeklyResultHomeComponent', () => {
  let component: WeeklyResultHomeComponent;
  let fixture: ComponentFixture<WeeklyResultHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyResultHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyResultHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
