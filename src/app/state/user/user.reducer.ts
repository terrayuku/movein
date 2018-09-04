import { AppState } from '../app.state';

import * as userActions from './user.actions';
import {NewUser, User} from './user.model';

export type Action = userActions.All;

const defaultUser = new User(null, 'GUEST');

export namespace UsersQuery {
  export const getUser = (state: AppState) => state.user;
  export const getCreatedUser = (state: AppState) => state.newUser;
}
export function createdUserReducer(state: NewUser, action: Action) {
  switch (action.type) {
    case userActions.CREATE_USER:
      return { ...state, ...action.payload, loading: true };
    default:
      return state;
  }
}
export function userReducer(state: User = defaultUser, action: Action) {
  switch (action.type) {
    // case userActions.CREATE_USER:
    //   return { ...state, ...action.payload, loading: true };

    case userActions.GET_USER:
      return { ...state, loading: true };

    case userActions.AUTHENTICATED:
      return { ...state, ...action.payload, loading: false };
    case userActions.AUTHENTICATE_EMAIL_PASSWORD:
      return { ...state, ...action.payload, loading: true };

    case userActions.NOT_AUTHENTICATED:
      return { ...state, ...defaultUser, loading: false };

    case userActions.GOOGLE_LOGIN:
      return { ...state, loading: true };

    case userActions.AUTH_ERROR:
      return { ...state, ...action.payload, loading: false };

    case userActions.LOGOUT:
      return { ...state, loading: true };

    default:
      return state;

  }
}
