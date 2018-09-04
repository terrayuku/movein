// import { Effect, Actions } from '@ngrx/effects';
// import { Observable } from 'rxjs/index';
// // import { Actions } from '@ngrx/store';
// import {Injectable} from '@angular/core';
// import * as talentActions from '../actoins/talent.actions';
// import {AppState} from "../app.state";
// // import {Store} from "@ngrx/store";
// import {AngularFireDatabase} from 'angularfire2/database-deprecated';
// import { map, mergeMap } from 'rxjs/operators';
// import {TalentService} from "../services/talent.service";
// type Action = talentActions.AddTalent;
// @Injectable()
// export class TalentEffects {
//
//   constructor(
//     private actions$: Actions,
//     // private store: Store<AppState>,
//     private db: AngularFireDatabase,
//     private talentService: TalentService
//   ) { }
//   @Effect()
//   SaveTalents$: Observable<Action> = this.actions$.ofType(talentActions.ADD_TALENT)
//     // .switchMap(() => this.talentService.candidates.do((payload) => new this.actions$.AddTalent(payload)));
//     .pipe(map((talent: talentActions.AddTalent) => talent.payload))
//     .pipe(mergeMap(payload => this.db.object(payload)))
//     .pipe(map(post => {
//       console.log('Candidates ', post.$key);
//     }));
// }
