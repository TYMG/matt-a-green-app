import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Draft } from '../models/draft.model';

export enum DraftActionTypes {
  LoadDrafts = '[Draft] Load Drafts',
  AddDraft = '[Draft] Add Draft',
  UpsertDraft = '[Draft] Upsert Draft',
  AddDrafts = '[Draft] Add Drafts',
  UpsertDrafts = '[Draft] Upsert Drafts',
  UpdateDraft = '[Draft] Update Draft',
  UpdateDrafts = '[Draft] Update Drafts',
  DeleteDraft = '[Draft] Delete Draft',
  DeleteDrafts = '[Draft] Delete Drafts',
  ClearDrafts = '[Draft] Clear Drafts'
}

export class LoadDrafts implements Action {
  readonly type = DraftActionTypes.LoadDrafts;

  constructor(public payload: { drafts: Draft[] }) {}
}

export class AddDraft implements Action {
  readonly type = DraftActionTypes.AddDraft;

  constructor(public payload: { draft: Draft }) {}
}

export class UpsertDraft implements Action {
  readonly type = DraftActionTypes.UpsertDraft;

  constructor(public payload: { draft: Draft }) {}
}

export class AddDrafts implements Action {
  readonly type = DraftActionTypes.AddDrafts;

  constructor(public payload: { drafts: Draft[] }) {}
}

export class UpsertDrafts implements Action {
  readonly type = DraftActionTypes.UpsertDrafts;

  constructor(public payload: { drafts: Draft[] }) {}
}

export class UpdateDraft implements Action {
  readonly type = DraftActionTypes.UpdateDraft;

  constructor(public payload: { draft: Update<Draft> }) {}
}

export class UpdateDrafts implements Action {
  readonly type = DraftActionTypes.UpdateDrafts;

  constructor(public payload: { drafts: Update<Draft>[] }) {}
}

export class DeleteDraft implements Action {
  readonly type = DraftActionTypes.DeleteDraft;

  constructor(public payload: { id: string }) {}
}

export class DeleteDrafts implements Action {
  readonly type = DraftActionTypes.DeleteDrafts;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearDrafts implements Action {
  readonly type = DraftActionTypes.ClearDrafts;
}

export type DraftActions =
 LoadDrafts
 | AddDraft
 | UpsertDraft
 | AddDrafts
 | UpsertDrafts
 | UpdateDraft
 | UpdateDrafts
 | DeleteDraft
 | DeleteDrafts
 | ClearDrafts;
