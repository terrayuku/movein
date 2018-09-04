// import { Injectable } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { FirebaseListObservable } from 'angularfire2/database-deprecated';
// import { Router } from '@angular/router';
// import * as firebase from 'firebase/app';
//
// import { Observable } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   user: Observable<firebase.User>;
//   displayName: string;
//   skills: Array<any>;
//   userId: string;
//   constructor(
//     private db: AngularFireDatabase,
//     private firebaseAuth: AngularFireAuth,
//     private router: Router
//   ) {
//     this.displayName = '';
//     this.userId = '';
//     this.user = firebaseAuth.authState;
//     if (this.user) {
//       console.log('Loged in', this.user);
//       // user details
//       this.getUser().subscribe((u) => {
//         this.displayName = u.displayName === '' ? u.email : u.displayName;
//         this.userId = u.uid;
//         // load skills
//         this.db.database.ref('candidates/' + this.userId).on('value', (snap) => {
//           snap.forEach(s => {
//             console.log(s.val().skills);
//             this.skills = s.val().skills;
//           });
//         });
//       });
//     } else {
//       console.log('Please log in');
//     }
//   }
//
//   public getUser() {
//     return this.user;
//   }
//   public getSkills() {
//     return this.skills;
//   }
//   public getDisplayName() {
//     return this.displayName;
//   }
//   addSkills(skills: Array<any>) {
//     this.skills = skills;
//     this.db.database.ref('candidates/' + this.userId).push({
//       skills: this.skills
//     }).then(response => {
//       this.router.navigate(['/dashboard', this.userId]);
//     });
//   }
//   // addNext(next: Array<any>) {
//   //   console.log(next);
//   //   this.next = next;
//   //   const dbSkills = this.db.list('/candidates/skills');
//   //   console.log(dbSkills);
//   // }
//
// }
