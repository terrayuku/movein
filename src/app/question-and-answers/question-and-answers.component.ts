import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-question-and-answers',
  templateUrl: './question-and-answers.component.html',
  styleUrls: ['./question-and-answers.component.css']
})
export class QuestionAndAnswersComponent implements OnInit {

  @Input() question: string;
  @Input() answer: string;
  constructor() {
    console.log(this.answer, this.question);
  }

  ngOnInit() {
  }

}
