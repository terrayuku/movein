import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {Effect, Actions, ofType} from '@ngrx/effects';

import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { defer } from 'rxjs/observable/defer';
import '../utils/rxjs.operators';

import {AppState} from '../app.state';
import * as profileActions from './profile.actions';
import {Router} from '@angular/router';
import {map} from 'rxjs-compat/operators/map';
import {switchMap} from 'rxjs-compat/operators/switchMap';
import { ProfilesQuery } from './profile.reducer';
import {Profile} from './profile.model';
import {UsersQuery} from '../user/user.reducer';
import {UserEffects} from '../user/user.effects';

type Action = profileActions.All;

@Injectable()
export class ProfileEffects {
  profile$ = this.store.pipe(select(ProfilesQuery.getProfile));
  user$ = this.store.pipe(select(UsersQuery.getUser));
  @Effect() updateProfile$: Observable<Action> = this.actions$.pipe(
    ofType(profileActions.PROFILE_UPDATE),
    map((action: profileActions.ProfileUpdate) => action.payload),
    switchMap(payload => {
      return Observable.fromPromise(this.updateprofile(payload));
    }))
    .map(profile => {
      if (profile) {
        console.log('Profile', profile);
        return new profileActions.GetProfile(this.user$);
      }
    })
    .catch(error => of(new profileActions.ProfileUpdateError({error: error.message})));

  @Effect({dispatch: false})
  init$: Observable<any> = defer(() => {
    this.store.dispatch(new profileActions.GetProfile(this.profile$));
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    private userService: UserEffects
  ) { }
  updateProfile(payload): any {
      console.log('Profile Payload', payload);
      this.store.dispatch(new profileActions.ProfileUpdate(payload));
      return this.profile$;
  }
  protected updateprofile(payload): Promise<any> {
    return this.afAuth.auth.currentUser.updateProfile({
      displayName: payload.displayName,
      photoURL: payload.photoURL
    })
      .then(response => {
        console.log('Updated');
        this.userService.getUser();
      })
      .catch(error => {
        console.log('Error', error);
      });
  }
}
