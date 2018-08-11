import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-pre-registration',
  templateUrl: './pre-registration.component.html',
  styleUrls: ['./pre-registration.component.css']
})
export class PreRegistrationComponent implements OnInit {
  email: string;
  cPassword: string;
  password: string;
  passwordMatched: boolean;
  constructor(public authService: AuthService) {
    console.log('AUth', authService);
  }
  ngOnInit() { }

  private matchPassword(password: string, cPassword): boolean {
    if (password === cPassword) {
      // password match
      return true;
    } else {
      return false;
    }
  }
  signUp() {
    this.passwordMatched = this.matchPassword(this.password, this.cPassword);
    if (this.passwordMatched) {
      this.authService.signUp(this.email, this.password);
    }
  }
  logOut() {
    this.authService.logout();
  }
}
