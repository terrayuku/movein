import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatCardModule} from '@angular/material';
// import {MatGridListModule} from '@angular/material';
// import {MatButtonModule} from '@angular/material';
// import {MatDialogModule} from '@angular/material';
// import {FormsModule} from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { talentReducer } from './reducer/talent.reducer';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';


import { AppComponent } from './app.component';
import { UnemployedCounterComponent } from './unemployed-counter/unemployed-counter.component';
import { MoveinComponent } from './movein/movein.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { RegisterComponent } from './register/register.component';
import { PreRegistrationComponent } from './pre-registration/pre-registration.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

import { environment } from '../environments/environment';
import {AuthService} from './auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { TalentComponent } from './talent/talent.component';
import { TalentReadComponent } from './talent-read/talent-read.component';
import { TalentCreateComponent } from './talent-create/talent-create.component';


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
    TalentComponent,
    TalentReadComponent,
    TalentCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({
      talent: talentReducer
    })
  ],
  // exports: [
  //   MatAutocompleteModule,
  //   MatBadgeModule,
  //   MatBottomSheetModule,
  //   MatButtonModule,
  //   MatButtonToggleModule,
  //   MatCardModule,
  //   MatCheckboxModule,
  //   MatChipsModule,
  //   MatStepperModule,
  //   MatDatepickerModule,
  //   MatDialogModule,
  //   MatDividerModule,
  //   MatExpansionModule,
  //   MatGridListModule,
  //   MatIconModule,
  //   MatInputModule,
  //   MatListModule,
  //   MatMenuModule,
  //   MatNativeDateModule,
  //   MatPaginatorModule,
  //   MatProgressBarModule,
  //   MatProgressSpinnerModule,
  //   MatRadioModule,
  //   MatRippleModule,
  //   MatSelectModule,
  //   MatSidenavModule,
  //   MatSliderModule,
  //   MatSlideToggleModule,
  //   MatSnackBarModule,
  //   MatSortModule,
  //   MatTableModule,
  //   MatTabsModule,
  //   MatToolbarModule,
  //   MatTooltipModule,
  //   MatTreeModule,
  // ],
  providers: [AuthService, AngularFireAuth],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
