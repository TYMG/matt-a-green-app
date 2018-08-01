import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from './user/reducers/user.reducer';
import * as fromTeam from './team/reducers/team.reducer';
import * as fromQueens from './queens/reducers/queens.reducer';
import * as fromLeague from './league/reducers/league.reducer';
import * as fromWeeklyResults from './weekly-results/reducers/weekly-results.reducer';


export interface State {

  user: fromUser.State;
  team: fromTeam.State;
  queens: fromQueens.State;
  league: fromLeague.State;
  weeklyResults: fromWeeklyResults.State;


}

export const reducers: ActionReducerMap<State> = {

  user: fromUser.reducer,
  team: fromTeam.reducer,
  queens: fromQueens.reducer,
  league: fromLeague.reducer,
  weeklyResults: fromWeeklyResults.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
