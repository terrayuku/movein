import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatDialog  } from '@angular/material';
import { SignupComponent } from '../signup/signup.component';
import {PreRegistrationComponent} from '../pre-registration/pre-registration.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: string;
  signin: string;

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) {
    this.register = 'REGISTER';
    this.signin = 'SIGN IN';
  }

  ngOnInit() {
  }
  signIn() {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '560px'
    });
    dialogRef.afterClosed();
  }
  creeateUser() {
    const dialogRef = this.dialog.open(PreRegistrationComponent, {
      width: '560px'
    });
    dialogRef.afterClosed();
  }
}
