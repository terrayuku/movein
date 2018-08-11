import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-pre-registration',
  templateUrl: './pre-registration.component.html',
  styleUrls: ['./pre-registration.component.css']
})
export class PreRegistrationComponent implements OnInit {
  email: string;
  password: string;
  errorMessage: string;
  button: boolean;
  constructor(public authService: AuthService) {
    this.errorMessage = '';
  }
  ngOnInit() { }
  signUp() {
    if (this.email && this.password) {
      this.authService.signUp(this.email, this.password);
    } else {
      this.errorMessage = 'Please complete the form';
    }
  }
  logOut() {
    this.authService.logout();
  }
}
