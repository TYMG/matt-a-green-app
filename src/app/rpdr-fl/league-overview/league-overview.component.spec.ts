import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueOverviewComponent } from './league-overview.component';

describe('LeagueOverviewComponent', () => {
  let component: LeagueOverviewComponent;
  let fixture: ComponentFixture<LeagueOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
