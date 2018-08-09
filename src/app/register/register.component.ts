import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: string;
  signin: string;

  constructor() {
    this.register = 'REGISTER';
    this.signin = 'SIGN IN';
  }

  ngOnInit() {
  }
}
