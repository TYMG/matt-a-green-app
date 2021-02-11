import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakpeekerComponent } from './sneakpeeker.component';

describe('SneakpeekerComponent', () => {
  let component: SneakpeekerComponent;
  let fixture: ComponentFixture<SneakpeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakpeekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakpeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
