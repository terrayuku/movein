import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';

import { AppComponent } from './app.component';
import { UnemployedCounterComponent } from './unemployed-counter/unemployed-counter.component';
import { MoveinComponent } from './movein/movein.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { RegisterComponent } from './register/register.component';
import { PreRegistrationComponent } from './pre-registration/pre-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    UnemployedCounterComponent,
    MoveinComponent,
    ContactDetailsComponent,
    RegisterComponent,
    PreRegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
