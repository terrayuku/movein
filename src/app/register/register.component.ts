import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {PreRegistrationComponent} from '../pre-registration/pre-registration.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  dialogResult: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(PreRegistrationComponent, {
      width: '600px',
      data: 'This text is passed into the dialog!'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }
}
