import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreRegistrationComponent } from './pre-registration/pre-registration.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: PreRegistrationComponent, name: 'PreRegister' },
  { path: 'signin', component: SignupComponent, name: 'SignIp' },
  { path: 'update-profile', component: UpdateProfileComponent, name: 'UpdateProfile' },
  { path: 'dashboard', component: DashboardComponent, name: 'Dashboard' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
