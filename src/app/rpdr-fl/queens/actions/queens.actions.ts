import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Queen } from '../models/queen.model';

export enum QueensActionTypes {
  LoadQueens = '[Queens] Load Queens',
  AddQueen = '[Queen] Add Queen',
  UpsertQueen = '[Queen] Upsert Queen',
  AddQueens = '[Queens] Add Queens',
  UpdateQueen = '[Queen] Update Queen',
  UpdateQueens = '[Queens] Update Queens',
  DeleteQueen = '[Queen] Delete Queen',
  DeleteQueens = '[Queens] Delete Queens',
  ClearQueens = '[Queens] Clear Queens'
}

export class LoadQueens implements Action {
  readonly type = QueensActionTypes.LoadQueens;

  constructor(public payload: { Queens: Queen[] }) { }
}

export class AddQueen implements Action {
  readonly type = QueensActionTypes.AddQueens;

  constructor(public payload: { queens: Queen }) { }
}

export class AddQueens implements Action {
  readonly type = QueensActionTypes.AddQueens;

  constructor(public payload: { Queens: Queen[] }) { }
}

export class UpdateQueen implements Action {
  readonly type = QueensActionTypes.UpdateQueens;

  constructor(public payload: { queens: Update<Queen> }) { }
}

export class UpdateQueens implements Action {
  readonly type = QueensActionTypes.UpdateQueens;

  constructor(public payload: { Queens: Update<Queen>[] }) { }
}

export class DeleteQueen implements Action {
  readonly type = QueensActionTypes.DeleteQueens;

  constructor(public payload: { id: string }) { }
}

export class DeleteQueens implements Action {
  readonly type = QueensActionTypes.DeleteQueens;

  constructor(public payload: { ids: string[] }) { }
}

export class ClearQueens implements Action {
  readonly type = QueensActionTypes.ClearQueens;
}

export type QueensActions =
  LoadQueens
  | AddQueen
  | AddQueens
  | UpdateQueen
  | UpdateQueens
  | DeleteQueen
  | DeleteQueens
  | ClearQueens;
