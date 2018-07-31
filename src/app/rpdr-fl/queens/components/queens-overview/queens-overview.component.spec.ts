import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueensOverviewComponent } from './queens-overview.component';

describe('QueensOverviewComponent', () => {
  let component: QueensOverviewComponent;
  let fixture: ComponentFixture<QueensOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueensOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueensOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
