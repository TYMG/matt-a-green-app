import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { WeeklyResult } from '../models/weekly-results.model';
import { WeeklyResultsActions, WeeklyResultsActionTypes } from '../actions/weekly-results.actions';

export interface State extends EntityState<WeeklyResult> {
  // additional entities state properties
}

export const adapter: EntityAdapter<WeeklyResult> = createEntityAdapter<WeeklyResult>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: WeeklyResultsActions
): State {
  switch (action.type) {
    case WeeklyResultsActionTypes.AddWeeklyResults: {
      return adapter.addOne(action.payload.weeklyResults, state);
    }

    case WeeklyResultsActionTypes.UpsertWeeklyResults: {
      return adapter.upsertOne(action.payload.weeklyResults, state);
    }

    case WeeklyResultsActionTypes.AddWeeklyResultss: {
      return adapter.addMany(action.payload.weeklyResultss, state);
    }

    case WeeklyResultsActionTypes.UpsertWeeklyResultss: {
      return adapter.upsertMany(action.payload.weeklyResultss, state);
    }

    case WeeklyResultsActionTypes.UpdateWeeklyResults: {
      return adapter.updateOne(action.payload.weeklyResults, state);
    }

    case WeeklyResultsActionTypes.UpdateWeeklyResultss: {
      return adapter.updateMany(action.payload.weeklyResultss, state);
    }

    case WeeklyResultsActionTypes.DeleteWeeklyResults: {
      return adapter.removeOne(action.payload.id, state);
    }

    case WeeklyResultsActionTypes.DeleteWeeklyResultss: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case WeeklyResultsActionTypes.LoadWeeklyResultss: {
      return adapter.addAll(action.payload.weeklyResultss, state);
    }

    case WeeklyResultsActionTypes.ClearWeeklyResultss: {
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
