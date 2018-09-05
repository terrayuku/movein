import { AppState } from '../app.state';

import * as profileActoins from './profile.actions';
import { User } from '../user/user.model';
import { Profile } from './profile.model';

export type Action = profileActoins.All;

export namespace ProfilesQuery {
  export const getProfile = (state: AppState) => state.profile;
  export const getUser = (state: AppState) => state.user;
}

export function profileReducer(state: Profile, action: Action) {
  switch (action.type) {
    case profileActoins.GET_PROFILE:
      return { ...state, ...action.payload};
    case profileActoins.GET_PROFILE_SUCCESS:
      return { ...state, ...action.payload};
    case profileActoins.GET_PROFILE_ERROR:
      return { ...state, ...action.payload};
    case profileActoins.PROFILE_UPDATE:
      return { ...state, ...action.payload};
    case profileActoins.PROFILE_UPDATE_SUCCESS:
      return { ...state, ...action.payload};
    case profileActoins.PROFILE_UPDATE_ERROR:
      return { ...state, ...action.payload};
    default:
      return state;
  }
}

