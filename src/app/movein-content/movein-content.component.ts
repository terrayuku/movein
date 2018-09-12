import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movein-content',
  templateUrl: './movein-content.component.html',
  styleUrls: ['./movein-content.component.css']
})
export class MoveinContentComponent implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
