import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { League } from '../models/league.model';

export enum LeagueActionTypes {
  LoadLeagues = '[League] Load Leagues',
  AddLeague = '[League] Add League',
  UpsertLeague = '[League] Upsert League',
  AddLeagues = '[League] Add Leagues',
  UpsertLeagues = '[League] Upsert Leagues',
  UpdateLeague = '[League] Update League',
  UpdateLeagues = '[League] Update Leagues',
  DeleteLeague = '[League] Delete League',
  DeleteLeagues = '[League] Delete Leagues',
  ClearLeagues = '[League] Clear Leagues'
}

export class LoadLeagues implements Action {
  readonly type = LeagueActionTypes.LoadLeagues;

  constructor(public payload: { leagues: League[] }) { }
}

export class AddLeague implements Action {
  readonly type = LeagueActionTypes.AddLeague;

  constructor(public payload: { league: League }) { }
}

export class UpsertLeague implements Action {
  readonly type = LeagueActionTypes.UpsertLeague;

  constructor(public payload: { league: League }) { }
}

export class AddLeagues implements Action {
  readonly type = LeagueActionTypes.AddLeagues;

  constructor(public payload: { leagues: League[] }) { }
}

export class UpsertLeagues implements Action {
  readonly type = LeagueActionTypes.UpsertLeagues;

  constructor(public payload: { leagues: League[] }) { }
}

export class UpdateLeague implements Action {
  readonly type = LeagueActionTypes.UpdateLeague;

  constructor(public payload: { league: Update<League> }) { }
}

export class UpdateLeagues implements Action {
  readonly type = LeagueActionTypes.UpdateLeagues;

  constructor(public payload: { leagues: Update<League>[] }) { }
}

export class DeleteLeague implements Action {
  readonly type = LeagueActionTypes.DeleteLeague;

  constructor(public payload: { id: string }) { }
}

export class DeleteLeagues implements Action {
  readonly type = LeagueActionTypes.DeleteLeagues;

  constructor(public payload: { ids: string[] }) { }
}

export class ClearLeagues implements Action {
  readonly type = LeagueActionTypes.ClearLeagues;
}

export type LeagueActions =
  LoadLeagues
  | AddLeague
  | UpsertLeague
  | AddLeagues
  | UpsertLeagues
  | UpdateLeague
  | UpdateLeagues
  | DeleteLeague
  | DeleteLeagues
  | ClearLeagues;
