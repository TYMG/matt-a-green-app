import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavBarContentComponent } from './nav-bar-content.component';

describe('NavBarContentComponent', () => {
  let component: NavBarContentComponent;
  let fixture: ComponentFixture<NavBarContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
