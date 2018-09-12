import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAndAnswersComponent } from './question-and-answers.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('QuestionAndAnswersComponent', () => {
  let component: QuestionAndAnswersComponent;
  let fixture: ComponentFixture<QuestionAndAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAndAnswersComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAndAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
