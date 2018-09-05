import { Action } from '@ngrx/store';
export const CREATE_USER = '[Auth] Create User';
export const GET_USER = '[Auth] Get User';
export const AUTHENTICATED = '[Auth] Authenticated';
export const AUTHENTICATE_EMAIL_PASSWORD = '[Auth] Authenticated email password';
export const NOT_AUTHENTICATED = '[Auth] Not Authenticated';
export const GOOGLE_LOGIN = '[Auth] Google login attempt';
export const LOGOUT = '[Auth] Logout';
export const AUTH_ERROR = '[Auth] Error';

export class CreateUser implements Action {
  readonly type = CREATE_USER;
  constructor(public payload: any) {}
}

export class GetUser implements Action {
  readonly type = GET_USER;
  constructor(public payload?: any) {}
}

export class Authenticated  implements Action {
  readonly type = AUTHENTICATED;
  constructor(public payload?: any) { }
}

export class AuthenticateEmailPassword implements Action {
  readonly type = AUTHENTICATE_EMAIL_PASSWORD;
  constructor(public payload?: any) {
  }
}

export class NotAuthenticated implements Action {
readonly type = NOT_AUTHENTICATED;
  constructor(public payload?: any) {}
}

export class GoogleLogin implements Action {
readonly type = GOOGLE_LOGIN;
  constructor(public payload?: any) {}
}

export class Logout implements Action {
readonly type = LOGOUT;
  constructor(public payload?: any) {}
}

export class AuthError implements Action {
readonly type = AUTH_ERROR;
  constructor(public payload?: any) {}
}

export type All
  = CreateUser
  | GetUser
  | Authenticated
  | AuthenticateEmailPassword
  | NotAuthenticated
  | GoogleLogin
  | Logout
  | AuthError;
