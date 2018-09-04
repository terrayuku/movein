import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {UserEffects} from '../state/user/user.effects';
import {MatDialogRef} from '@angular/material';
import {NewUser} from '../state/user/user.model';
import {Observable} from 'rxjs/Observable';
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
  createdUser$: Observable<NewUser> = this.userService.createdUser$;
  constructor(private userService: UserEffects,
              public dialogRef: MatDialogRef<PreRegistrationComponent>
  ) {
    this.errorMessage = '';
  }
  ngOnInit() { }
  createduser() {
    if (this.email && this.password) {
      this.userService.createuser(this.email, this.password);
      this.dialogRef.close();
    } else {
      this.errorMessage = 'Please complete the form';
    }
  }
}
