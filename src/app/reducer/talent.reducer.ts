import { Action } from '@ngrx/store';
import { Talent } from './../models/talent.model';
import * as TalentActions from './../actoins/talent.actions';

const initialState: Talent = {
  talent_description: 'Sport',
  talent_code: 'SPT'
};

export function talentReducer(state: Talent[] = [initialState], action: TalentActions.Actions) {
  switch (action.type) {
    case TalentActions.ADD_TALENT:
      return [...state, action.payload];
    case TalentActions.REMOVE_TALENT:
      state.splice(action.payload, 1);
      return state;
    default:
      return state;
  }
}
