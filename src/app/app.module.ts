import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule,  RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { UnemployedCounterComponent } from './unemployed-counter/unemployed-counter.component';
import { MoveinComponent } from './movein/movein.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { RegisterComponent } from './register/register.component';
import { PreRegistrationComponent } from './pre-registration/pre-registration.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

import { reducers, CustomSerializer } from './state/reducers';

import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatGridListModule,
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import {AppStateModule} from './state/app.state.module';
// import { PersonalSuccessComponent } from './personal-success/personal-success.component';
// import { QuestionAndAnswersComponent } from './question-and-answers/question-and-answers.component';
import { MoveinContentComponent } from './movein-content/movein-content.component';


@NgModule({
  declarations: [
    AppComponent,
    UnemployedCounterComponent,
    MoveinComponent,
    ContactDetailsComponent,
    RegisterComponent,
    PreRegistrationComponent,
    SignupComponent,
    UpdateProfileComponent,
    DashboardComponent,
    HomeComponent,
    // PersonalSuccessComponent,
    // QuestionAndAnswersComponent,
    MoveinContentComponent
  ],
  imports: [
    AppStateModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    MatToolbarModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [{provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
