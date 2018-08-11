import { TestBed, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


import { AuthService } from './auth.service';
import { of } from 'rxjs';

let service: AuthService;

const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

export class MockUser {
  displayName: string;
  isAnonymous: boolean;
  uid: string;
}

describe('AuthService', () => {
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService,     userClass: AuthService},
        { provide: AngularFireAuth, userValue: AngularFireAuthStub },
        { provide: Router,          userValue: routerSpy}
      ]
    });

    service = new AuthService(AngularFireAuthStub, routerSpy);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
