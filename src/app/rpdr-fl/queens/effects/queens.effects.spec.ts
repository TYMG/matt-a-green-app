import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { QueensEffects } from './queens.effects';

describe('QueensService', () => {
  let actions$: Observable<any>;
  let effects: QueensEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        QueensEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(QueensEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
