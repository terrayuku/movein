import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../user.service';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

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
  constructor(
    fb: FormBuilder,
    public user: UserService,
    private authUser: AuthService,
    private router: Router
  ) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 0
    });
  }

  ngOnInit() {
    this.logedInUser = this.user.getDisplayName();
    this.displayProfile = true;
  }
  logOut() {
    this.authUser.logout();
  }
  getUserSkills() {
    this.displayProfile = false;
    this.skills = this.user.getSkills();
  }
  getProfile() {
    this.displayProfile = true;
    // this.router.navigate(['/update-profile', this.authUser.userUid]);
  }
}
