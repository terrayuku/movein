import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Rx';
import { defer } from 'rxjs/observable/defer';
import '../utils/rxjs.operators';

import {AppState} from '../app.state';
import {User} from './user.model';
import {UsersQuery} from './user.reducer';

import * as userActions from './user.actions';
import {Router} from '@angular/router';
type Action = userActions.All;

@Injectable()
export class UserEffects {
  user$ = this.store.select(UsersQuery.getUser);
  @Effect() getUser$: Observable<Action> = this.actions$.ofType(userActions.GET_USER)
    .map((action: userActions.GetUser) => action.payload )
    .switchMap(payload => this.afAuth.authState )
    .map( authData => {
      if (authData) {
        /// User logged in
        const user = new User(authData.uid, authData.displayName);
        return new userActions.Authenticated(user);
      } else {
        /// User not logged in
        return new userActions.NotAuthenticated();
      }

    })
    .catch(err =>  Observable.of(new userActions.AuthError()) );


  @Effect() login$: Observable<Action> = this.actions$.ofType(userActions.GOOGLE_LOGIN)
    .map((action: userActions.GoogleLogin) => action.payload)
    .switchMap(payload => {
      // console.log('Payload', payload);
      return Observable.fromPromise( this.googleLogin() );
    })
    .map( credential => {
      // successful login
      return new userActions.GetUser();
    })
    .catch(err => {
      return Observable.of(new userActions.AuthError({error: err.message}));
    });
  @Effect() signin$: Observable<Action> = this.actions$.ofType(userActions.AUTHENTICATE_EMAIL_PASSWORD)
    .map((action: userActions.AuthenticateEmailPassword) => action.payload)
    .switchMap(payload => {
      return Observable.fromPromise(this.signInWithEmailPassword(payload));
    })
    .map( credential => {
      return new userActions.GetUser();
    })
    .catch(err => {
      return Observable.of(new userActions.AuthError({error: err.message}));
    });


  @Effect() logout$: Observable<Action> = this.actions$.ofType(userActions.LOGOUT)
    .map((action: userActions.Logout) => action.payload )
    .switchMap(payload => {
      return Observable.of( this.signOut() );
    })
    .map( authData => {
      return new userActions.NotAuthenticated();
    })
    .catch(err => Observable.of(new userActions.AuthError({error: err.message})) );


  @Effect({dispatch: false})
  init$: Observable<any> = defer(() => {
    this.store.dispatch(new userActions.GetUser());
  });

  // ************************************************
  // Internal Code
  // ************************************************

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) { }

  /**
   *
   */
  login(): Observable<User> {
    this.store.dispatch(new userActions.GoogleLogin());
    return this.user$;
  }
  signin(email: string, password: string): Observable<User> {
    this.store.dispatch(new userActions.AuthenticateEmailPassword({ email: email, password: password }));
    return this.user$;
  }

  /**
   *
   */
  logout(): Observable<User> {
    this.store.dispatch(new userActions.Logout());
    return this.user$;
  }

  // ******************************************
  // Internal Methods
  // ******************************************


  protected googleLogin(): Promise<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider)
      .then(response => {
        console.log('POPUP');
        this.router.navigate(['/dashboard', response.user.uid]);
      })
      .catch(error => {
        console.log('ERROR Login ', error.message);
      });
  }
  protected signInWithEmailPassword(payload): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        // navigate to dashboard
        this.router.navigate(['/dashboard', response.user.uid]);
      })
      .catch(error => {
        console.log('ERROR Login ', error.message);
      });
  }
  protected signOut(): Promise<any> {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

}
