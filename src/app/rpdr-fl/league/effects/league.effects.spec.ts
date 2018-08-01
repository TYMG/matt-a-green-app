import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LeagueEffects } from './league.effects';

describe('LeagueService', () => {
  let actions$: Observable<any>;
  let effects: LeagueEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LeagueEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(LeagueEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
