import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Talent } from './../models/talent.model';

export const ADD_TALENT = '[Talent] Add';
export const REMOVE_TALENT = '[Talent] Remove';

export class AddTalent implements Action {
  readonly type = ADD_TALENT;

  constructor(public payload: Talent) {

  }
}

export class RemoveTalent implements Action {
  readonly type = REMOVE_TALENT;

  constructor(public payload: number) {

  }
}

export type Actions = AddTalent | RemoveTalent;
