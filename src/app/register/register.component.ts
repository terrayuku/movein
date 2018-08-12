import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatDialog  } from '@angular/material';
import { SignupComponent } from '../signup/signup.component';

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
    // this.router.navigate(['/signin']);
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '560px',
      opacity: '0 !important',
      data: {password: this.password, email: this.email}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.email = result;
    });
  }
}
