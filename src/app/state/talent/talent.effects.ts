import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import '../utils/rxjs.operators';

import {AppState} from '../app.state';
import {TalentQuery} from './talent.reducer';

// import { AUTHENTICATED } from '../users/user.actions';
import * as talentActions from './talent.actions';
import {map} from 'rxjs-compat/operators/map';
import {mergeMap} from 'rxjs-compat/operators/mergeMap';
type Action = talentActions.All;

@Injectable()
export class TalentEffects {
  talent$ = this.store.pipe(select(TalentQuery.getTalent));
  // @Effect()
  // init$: Observable<Action> = this.a.ofType(AUTHENTICATED)
  //   .map(_ => new talentActions.GetTalent('/talent/all'));
  @Effect()
  getTalent$: Observable<Action> = this.actions$.pipe(ofType(talentActions.GET_TALENT),
    map((action: talentActions.GetTalent) => action.payload),
    mergeMap(payload => this.db.object(payload).valueChanges()))
    .map((talent) => {
      // talent.pushKey = talent.$key;
      return new talentActions.GetTalentSuccess(talent);
    });
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private db: AngularFireDatabase
  ) { }
}
