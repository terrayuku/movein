import { AppState } from '../app.state';

import * as TalentActions from './talent.actions';
import { Talent } from './talent.model';

export type Action = TalentActions.All;

export namespace TalentQuery {
  export const getTalent = (state: AppState) => state.talent;
}

export function talentReducer(state: Talent, action: Action) {
  switch (action.type) {
    case TalentActions.GET_TALENT:
      return { ...state, loading: true };

    case TalentActions.GET_TALENT_SUCCESS:
      return { ...state, ...action.payload, loading: false };

    case TalentActions.TALENT_ADD:
      return { ...state, ...action.payload, loading: true };

    case TalentActions.TALENT_ADD_SUCCESS:
      return { ...state, loading: false };

    case TalentActions.TALENT_FAIL:
      return { ...state, ...action.payload, loading: false };
    default:
      return state;
  }
}
