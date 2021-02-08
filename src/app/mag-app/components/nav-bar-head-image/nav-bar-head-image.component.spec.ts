import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavBarHeadImageComponent } from './nav-bar-head-image.component';

describe('NavBarHeadImageComponent', () => {
  let component: NavBarHeadImageComponent;
  let fixture: ComponentFixture<NavBarHeadImageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarHeadImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarHeadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
