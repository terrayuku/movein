import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core';

import { PreRegistrationComponent } from './pre-registration.component';
import { of } from 'rxjs';
import {Router} from '@angular/router';
import {UserEffects} from '../state/user/user.effects';
import {MatDialogRef} from '@angular/material';


export class MockUser {
  displayName: string;
  isAnonymous: boolean;
  uid: string;
}

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
  class MockUserService {
    public setContext() {}
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreRegistrationComponent ],
      providers: [
        { provide: UserEffects, useClass: MockUserService },
        { provide: MatDialogRef, useValue: {} }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    fixture = TestBed.createComponent(PreRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
