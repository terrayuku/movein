import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// *************************
// Custom Application imports
// *************************

import { talentReducer } from './talent/talent.reducer';
import { userReducer } from './user/user.reducer';


import {UserEffects} from './user';
import {TalentEffects} from './talent';

import { environment } from '../../environments/environment';
export const firebase = environment.firebase;

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    EffectsModule.forRoot([
      UserEffects,
      TalentEffects
    ]),

    // Signature matches AppState interface
    // StoreModule.forFeature('AppState', {
    //   talent: talentReducer,
    //   user: userReducer
    // })
  ],
  providers: [
    UserEffects,
    TalentEffects
  ],
})
export class AppStateModule { }
