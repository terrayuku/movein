import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Observable<firebase.User>;
  candidates: FirebaseListObservable<any[]>;
  displayName: string;
  skills: Array<any>;
  next: Array<any>;
  constructor(
    private db: AngularFireDatabase,
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user = firebaseAuth.authState;
    if (this.user) {
      console.log('Loged in', this.user);
      this.getUser().subscribe((u) => {
        this.displayName = u.displayName;
      });
    } else {
      console.log('Please log in');
    }
  }

  public getUser() {
    return this.user;
  }
  addSkills(skills: Array<any>) {
    console.log(skills);
    this.skills = skills;
    this.db.database.ref('candidates/skills').push({
      skills: this.skills,
      displayName: this.displayName
    }).then(response => {
      this.router.navigate(['/dashboard']);
    });
  }
  // addNext(next: Array<any>) {
  //   console.log(next);
  //   this.next = next;
  //   const dbSkills = this.db.list('/candidates/skills');
  //   console.log(dbSkills);
  // }

}
