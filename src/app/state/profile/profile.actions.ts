import { Action } from '@ngrx/store';
import {Profile} from './profile.model';
import {User} from '../user/user.model';

export const PROFILE_UPDATE = '[Profile] Update';
export const PROFILE_UPDATE_SUCCESS = '[Profile] Update Success';
export const GET_PROFILE =  '[Profile] Get Profile';
export const GET_PROFILE_SUCCESS =  '[Profile] Get Profile Success';
export const PROFILE_UPDATE_ERROR = '[Profile] Update Error';
export const GET_PROFILE_ERROR = '[Profile] Get Error';

export class ProfileUpdate implements Action {
  readonly type = PROFILE_UPDATE;
  constructor(public payload: Profile) {}
}

export class ProfileUpdateSuccess implements Action {
  readonly type = PROFILE_UPDATE_SUCCESS;
  constructor(public payload: Profile) { }
}

export class GetProfile implements Action {
  readonly type = GET_PROFILE;
  constructor(public payload?: any) { }
}

export class GetProfileSuccess implements Action {
  readonly type = GET_PROFILE_SUCCESS;
  constructor(public payload: User) { }
}

export class ProfileUpdateError implements Action {
  readonly type = PROFILE_UPDATE_ERROR;
  constructor(public payload?: any) { }
}

export class GetProfileError implements Action {
  readonly type = GET_PROFILE_ERROR;
  constructor(public payload: User) { }
}

export type All
  = ProfileUpdate
  | ProfileUpdateSuccess
  | GetProfile
  | GetProfileSuccess
  | ProfileUpdateError
  | GetProfileError;
