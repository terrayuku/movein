import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreRegistrationComponent } from './pre-registration/pre-registration.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: PreRegistrationComponent },
  { path: 'signin', component: SignupComponent },
  { path: 'update-profile/:uid', component: UpdateProfileComponent },
  { path: 'dashboard/:uid', component: DashboardComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
