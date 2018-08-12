import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: string;
  signin: string;

  constructor(private router: Router) {
    this.register = 'REGISTER';
    this.signin = 'SIGN IN';
  }

  ngOnInit() {
  }
  signIn() {
    this.router.navigate(['/signin']);
  }
}
