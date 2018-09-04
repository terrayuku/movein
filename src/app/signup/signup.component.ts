import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {Observable} from 'rxjs/Rx';
import {User} from '../state/user/user.model';
import {UserEffects} from '../state/user/user.effects';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;
  user$: Observable<User> = this.userService.user$;
  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    private userService: UserEffects
  ) { }

  ngOnInit() {
  }
  login () {
    this.userService.login();
    this.dialogRef.close();
  }
  logout () {
    this.userService.logout();
    this.dialogRef.close();
  }
  signin() {
    this.userService.signin(this.email, this.password);
    this.dialogRef.close();
  }
  onNoClick() {
    this.dialogRef.close();
  }

}
