import { Component, OnInit } from '@angular/core';
import { Counter } from '../Counter';

@Component({
  selector: 'app-unemployed-counter',
  templateUrl: './unemployed-counter.component.html',
  styleUrls: ['./unemployed-counter.component.css']
})
export class UnemployedCounterComponent implements OnInit {

  count: Counter = {
    unemployedCount: 3.3
  };
  constructor() { }

  ngOnInit() {
  }

}
