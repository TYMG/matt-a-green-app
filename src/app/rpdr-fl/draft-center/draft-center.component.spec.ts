import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftCenterComponent } from './draft-center.component';

describe('DraftCenterComponent', () => {
  let component: DraftCenterComponent;
  let fixture: ComponentFixture<DraftCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
