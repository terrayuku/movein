import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  userUid: string;
  displayName: string;
  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user = firebaseAuth.authState;
  }
  public getDisplayName() {
    return this.displayName;
  }
  signUp(email: string, password: string) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        this.userUid = response.user.uid;
        this.displayName = response.user.displayName === '' ? response.user.email : response.user.displayName;
        // navigate to profile
        this.router.navigate(['/dashboard', this.userUid]);
      })
      .catch(err => {
        console.log('ERROR', err.message);
      });
  }
  signin(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.userUid = response.user.uid;
        // navigate to dashboard
        this.router.navigate(['/dashboard', response.user.uid]);
      })
      .catch(error => {
        console.log('ERROR Login ', error.message);
      });
  }
  logout() {
    this.firebaseAuth
      .auth
      .signOut().then(() => {
        this.userUid = '';
        this.displayName = '';
        this.router.navigate(['/']);
    });
  }
}
