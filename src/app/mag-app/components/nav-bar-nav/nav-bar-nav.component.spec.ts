import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavBarNavComponent } from './nav-bar-nav.component';

describe('NavBarNavComponent', () => {
  let component: NavBarNavComponent;
  let fixture: ComponentFixture<NavBarNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
