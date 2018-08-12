import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;
  constructor(
    public authService: AuthService,
    public dialogRef: MatDialogRef<SignupComponent>
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.signin(this.email, this.password);
    this.dialogRef.close();
  }
  onNoClick() {
    this.dialogRef.close();
  }

}
