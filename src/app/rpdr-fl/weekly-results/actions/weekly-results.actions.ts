import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { WeeklyResult } from '../models/weekly-results.model';

export enum WeeklyResultsActionTypes {
  LoadWeeklyResultss = '[WeeklyResults] Load WeeklyResultss',
  AddWeeklyResults = '[WeeklyResults] Add WeeklyResults',
  UpsertWeeklyResults = '[WeeklyResults] Upsert WeeklyResults',
  AddWeeklyResultss = '[WeeklyResults] Add WeeklyResultss',
  UpsertWeeklyResultss = '[WeeklyResults] Upsert WeeklyResultss',
  UpdateWeeklyResults = '[WeeklyResults] Update WeeklyResults',
  UpdateWeeklyResultss = '[WeeklyResults] Update WeeklyResultss',
  DeleteWeeklyResults = '[WeeklyResults] Delete WeeklyResults',
  DeleteWeeklyResultss = '[WeeklyResults] Delete WeeklyResultss',
  ClearWeeklyResultss = '[WeeklyResults] Clear WeeklyResultss'
}

export class LoadWeeklyResultss implements Action {
  readonly type = WeeklyResultsActionTypes.LoadWeeklyResultss;

  constructor(public payload: { weeklyResultss: WeeklyResult[] }) {}
}

export class AddWeeklyResults implements Action {
  readonly type = WeeklyResultsActionTypes.AddWeeklyResults;

  constructor(public payload: { weeklyResults: WeeklyResult }) {}
}

export class UpsertWeeklyResults implements Action {
  readonly type = WeeklyResultsActionTypes.UpsertWeeklyResults;

  constructor(public payload: { weeklyResults: WeeklyResult }) {}
}

export class AddWeeklyResultss implements Action {
  readonly type = WeeklyResultsActionTypes.AddWeeklyResultss;

  constructor(public payload: { weeklyResultss: WeeklyResult[] }) {}
}

export class UpsertWeeklyResultss implements Action {
  readonly type = WeeklyResultsActionTypes.UpsertWeeklyResultss;

  constructor(public payload: { weeklyResultss: WeeklyResult[] }) {}
}

export class UpdateWeeklyResults implements Action {
  readonly type = WeeklyResultsActionTypes.UpdateWeeklyResults;

  constructor(public payload: { weeklyResults: Update<WeeklyResult> }) {}
}

export class UpdateWeeklyResultss implements Action {
  readonly type = WeeklyResultsActionTypes.UpdateWeeklyResultss;

  constructor(public payload: { weeklyResultss: Update<WeeklyResult>[] }) {}
}

export class DeleteWeeklyResults implements Action {
  readonly type = WeeklyResultsActionTypes.DeleteWeeklyResults;

  constructor(public payload: { id: string }) {}
}

export class DeleteWeeklyResultss implements Action {
  readonly type = WeeklyResultsActionTypes.DeleteWeeklyResultss;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearWeeklyResultss implements Action {
  readonly type = WeeklyResultsActionTypes.ClearWeeklyResultss;
}

export type WeeklyResultsActions =
 LoadWeeklyResultss
 | AddWeeklyResults
 | UpsertWeeklyResults
 | AddWeeklyResultss
 | UpsertWeeklyResultss
 | UpdateWeeklyResults
 | UpdateWeeklyResultss
 | DeleteWeeklyResults
 | DeleteWeeklyResultss
 | ClearWeeklyResultss;
