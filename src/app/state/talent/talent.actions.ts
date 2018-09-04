import { Action } from '@ngrx/store';
import { Talent } from './talent.model';

export const GET_TALENT           = 'Talent get';
export const GET_TALENT_SUCCESS   = 'Talent get success';

export const TALENT_ADD           = 'Talent add';
export const TALENT_ADD_SUCCESS   = 'Talent add success';
export const TALENT_FAIL          = 'Talent fail';

export class GetTalent implements Action {
  readonly type = GET_TALENT;
  constructor(public payload: string) {}
}

export class GetTalentSuccess implements Action {
  readonly type = GET_TALENT_SUCCESS;
  constructor(public payload: any) {}
}

export class TalentAdd implements Action {
  readonly type = TALENT_ADD;
  constructor(public payload: any) {}
}

export class TalentAddSuccess implements Action {
  readonly type = TALENT_ADD_SUCCESS;
  constructor(public payload?: Talent) {}
}

export class TalentFail implements Action {
  readonly type = TALENT_FAIL;
  constructor(public payload?: any) {}
}

export type All
  = GetTalent
  | GetTalentSuccess
  | TalentAdd
  | TalentAddSuccess
  | TalentFail;
