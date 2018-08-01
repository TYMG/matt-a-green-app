import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { League } from './league.model';
import { LeagueActions, LeagueActionTypes } from './league.actions';

export interface State extends EntityState<League> {
  // additional entities state properties
}

export const adapter: EntityAdapter<League> = createEntityAdapter<League>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: LeagueActions
): State {
  switch (action.type) {
    case LeagueActionTypes.AddLeague: {
      return adapter.addOne(action.payload.league, state);
    }

    case LeagueActionTypes.UpsertLeague: {
      return adapter.upsertOne(action.payload.league, state);
    }

    case LeagueActionTypes.AddLeagues: {
      return adapter.addMany(action.payload.leagues, state);
    }

    case LeagueActionTypes.UpsertLeagues: {
      return adapter.upsertMany(action.payload.leagues, state);
    }

    case LeagueActionTypes.UpdateLeague: {
      return adapter.updateOne(action.payload.league, state);
    }

    case LeagueActionTypes.UpdateLeagues: {
      return adapter.updateMany(action.payload.leagues, state);
    }

    case LeagueActionTypes.DeleteLeague: {
      return adapter.removeOne(action.payload.id, state);
    }

    case LeagueActionTypes.DeleteLeagues: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case LeagueActionTypes.LoadLeagues: {
      return adapter.addAll(action.payload.leagues, state);
    }

    case LeagueActionTypes.ClearLeagues: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
