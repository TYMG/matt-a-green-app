import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResumeWorkHistoryEntryComponent } from './resume-work-history-entry.component';

describe('ResumeWorkHistoryEntryComponent', () => {
  let component: ResumeWorkHistoryEntryComponent;
  let fixture: ComponentFixture<ResumeWorkHistoryEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeWorkHistoryEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeWorkHistoryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
