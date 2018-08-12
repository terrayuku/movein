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
  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user = firebaseAuth.authState;
  }
  signUp(email: string, password: string) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log('New User', response.user.uid);
        this.userUid = response.user.uid;
        // navigate to profile
        this.router.navigate(['/update-profile', response.user.uid]);
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
      .signOut();
    this.router.navigate(['/']);
  }
}
