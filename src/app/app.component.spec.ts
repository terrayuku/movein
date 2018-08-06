import { TestBed, async } from '@angular/core/testing';
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
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('MOVEIN');
  }));
});
