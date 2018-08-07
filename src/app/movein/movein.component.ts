import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movein',
  templateUrl: './movein.component.html',
  styleUrls: ['./movein.component.css']
})
export class MoveinComponent implements OnInit {
  movein: string;
  constructor() {
    this.movein = 'The MOVEIN platform is a platform that aims in equipping and directing the unemployed individuals to specific materials ' +
    'that are market and industry relevant at that point in time for their career of choice. This platform is an information ' +
    'centered platform to guide and provide online training assessments to unemployed individuals.';
  }

  ngOnInit() {
  }

}
