import * as fromRouter from '@ngrx/router-store';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { RouterStateUrl, AppState} from '../app.state';
import {talentReducer} from '../talent/talent.reducer';
import {createdUserReducer, userReducer} from '../user/user.reducer';

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  talent: talentReducer,
  user: userReducer,
  newUser: createdUserReducer
};

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;
    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;
    return { url, queryParams, params };
  }
}
