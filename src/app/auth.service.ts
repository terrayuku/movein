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
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    console.log(firebaseAuth);
    this.user = firebaseAuth.authState;
  }
  signUp(email: string, password: string) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log('Success! ', response);
        // navigate to profile
        this.router.navigate(['/update-profile']);
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
        console.log('Welcome', response);
        // navigate to dashboard
        this.router.navigate(['/update-profile']);
      })
      .catch(error => {
        console.log('ERROR Login ', error.message);
      });
  }
  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }
}
