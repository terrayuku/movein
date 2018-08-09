import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  email: string;
  message: string;
  constructor() {
    this.message = 'You can contact our support team for further information about the MOVEIN platform.';
    this.email = 'simtyuku@gmail.com';
  }

  ngOnInit() {
  }

}
