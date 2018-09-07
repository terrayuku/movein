import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import {UnemployedCounterComponent} from './unemployed-counter/unemployed-counter.component';
import {RegisterComponent} from './register/register.component';
import {PreRegistrationComponent} from './pre-registration/pre-registration.component';
import {MoveinComponent} from './movein/movein.component';
import {ContactDetailsComponent} from './contact-details/contact-details.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UnemployedCounterComponent,
        RegisterComponent,
        PreRegistrationComponent,
        MoveinComponent,
        ContactDetailsComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'MOVEIN'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('MOVEIN');
  }));

});
