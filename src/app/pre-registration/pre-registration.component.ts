import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-pre-registration',
  templateUrl: './pre-registration.component.html',
  styleUrls: ['./pre-registration.component.css']
})
export class PreRegistrationComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<PreRegistrationComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }
  ngOnInit() {
  }
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
