import * as fromRouter from '@ngrx/router-store';
import { Params } from '@angular/router';
import { Talent } from './talent';
import { User } from './user';
export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

// export interface State {
//   routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
// }
export interface AppState {
  talent: Talent;
  user: User;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}
