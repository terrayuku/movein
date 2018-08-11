import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {inject, NO_ERRORS_SCHEMA} from '@angular/core';

import { PreRegistrationComponent } from './pre-registration.component';
import {AuthService} from '../auth.service';
import { of } from 'rxjs';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';


export class MockUser {
  displayName: string;
  isAnonymous: boolean;
  uid: string;
}
const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

describe('PreRegistrationComponent', () => {
  const authState: MockUser =  {
    displayName: null,
    isAnonymous: false,
    uid: '17WvU2Vj58SnTz8v7EqyYYb0WRc2'
  };

  const AngularFireAuthStub: any = {
    auth: jasmine.createSpyObj('auth', {
      'signInAnonymously': Promise.reject({
        code: 'auth/operation-not-allowed'
      }),
      // 'signInWithPopup': Promise.reject(),
      // 'signOut': Promise.reject()
    }),
    authState: of(authState)
  };
  let component: PreRegistrationComponent;
  let fixture: ComponentFixture<PreRegistrationComponent>;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreRegistrationComponent ],
      providers: [
        { provide: AuthService,     useClass: AuthService },
        { provide: AngularFireAuth, userValue: AngularFireAuthStub },
        { provide: Router,          userValue: routerSpy }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    authService = new AuthService(AngularFireAuthStub, routerSpy);
    fixture = TestBed.createComponent(PreRegistrationComponent);
    component = fixture.componentInstance;
    // authService = fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
  }));
  it('should define service',  () => {
    // authService = new AuthService(AngularFireAuthStub, routerSpy);
    // spyOn(authService, 'auth').and.returnValue(Promise.resolve(AngularFireAuthStub));
    expect(authService).toBeDefined();
  });

  it('should create', () => {
    // authService = new AuthService(AngularFireAuthStub, routerSpy);
    expect(component).toBeTruthy();
  });
});
