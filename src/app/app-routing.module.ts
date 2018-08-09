import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreRegistrationComponent } from './pre-registration/pre-registration.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  { path: 'register', component: PreRegistrationComponent },
  { path: 'signin', component: SignupComponent },
  { path: 'update-profile', component: UpdateProfileComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
