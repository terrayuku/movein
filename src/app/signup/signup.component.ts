import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.signin(this.email, this.password);
  }

}
