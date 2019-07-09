import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarNameplateComponent } from './nav-bar-nameplate.component';

describe('NavBarNameplateComponent', () => {
  let component: NavBarNameplateComponent;
  let fixture: ComponentFixture<NavBarNameplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarNameplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarNameplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
