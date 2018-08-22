import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Talent } from './../models/talent.model';
import { AppState } from './../app.state';
import * as TalentActoins from './../actoins/talent.actions';

@Component({
  selector: 'app-talent-create',
  templateUrl: './talent-create.component.html',
  styleUrls: ['./talent-create.component.css']
})
export class TalentCreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addTalent(description, code) {
    this.store.dispatch(new TalentActoins.AddTalent({talent_description: description, talent_code: code}));
  }

}
