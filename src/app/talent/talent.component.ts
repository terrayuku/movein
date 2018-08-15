import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.css']
})
export class TalentComponent implements OnInit {
  talents: any;
  sTalent: boolean;
  constructor() {

  }

  ngOnInit() {
    this.talents = [
      {
        'id': '1',
        'name': 'Art'
      },
      {
        'id': '2',
        'name': 'Sport'
      },
      {
        'id': '3',
        'name': 'Creativity'
      },
      {
        'id': '4',
        'name': 'Leadership'
      },
      {
        'id': '5',
        'name': 'Public Speaker'
      },
      {
        'id': '6',
        'name': 'Story Telling'
      },
      {
        'id': '7',
        'name': 'Knowledge'
      },
      {
        'id': '8',
        'name': 'Strategic Thinking'
      },
      {
        'id': '9',
        'name': 'Thinker'
      }
    ];
  }
  selectedTalent() {
    this.sTalent = true;

    console.log(this.sTalent);
  }
}
