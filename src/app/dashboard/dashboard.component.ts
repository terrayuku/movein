import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../state/user/user.model';
import {Observable} from 'rxjs/Observable';
import {UserEffects} from '../state/user/user.effects';
import {Router} from '@angular/router';
import {UpdateProfileComponent} from '../update-profile/update-profile.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  options: FormGroup;
  logedInUser: string;
  skills: any;
  displayProfile: boolean;
  selectTalents: boolean;
  user$: Observable<User> = this.userService.user$;
  constructor(
    fb: FormBuilder,
    private userService: UserEffects,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 0
    });
  }

  ngOnInit() {
    // this.logedInUser = this.user$.;
    this.displayProfile = true;
    this.selectTalents = false;
  }
  logout() {
    this.userService.logout();
  }
  // getUserSkills() {
  //   this.displayProfile = false;
  //   this.skills = this.user.getSkills();
  // }
  // getProfile(uid) {
  //   this.displayProfile = true;
  //   // this.dialogRef.open(UpdateProfileComponent);
  //   const dialogRef = this.dialog.open(UpdateProfileComponent, {
  //     width: '560px'
  //   });
  //   dialogRef.afterClosed();
  //   // this.router.navigate(['/update-profile', uid]);
  // }
  // selectTalent() {
  //   this.selectTalents = true;
  //   this.displayProfile = false;
  // }
}
