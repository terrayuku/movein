import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../user.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  options: FormGroup;
  logedInUser: string;
  constructor(fb: FormBuilder, public user: UserService, private authUser: AuthService) {

    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 0
    });
  }

  ngOnInit() {
    this.user.getUser().subscribe(u => {
      this.logedInUser = u.displayName;
    });
  }
  logOut() {
    this.authUser.logout();
  }
}
