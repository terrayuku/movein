import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Talent } from './../models/talent.model';
import { AppState } from './../app.state';
import * as TalentActoins from './../actoins/talent.actions';

@Component({
  selector: 'app-talent-read',
  templateUrl: './talent-read.component.html',
  styleUrls: ['./talent-read.component.css']
})
export class TalentReadComponent implements OnInit {
  talents: Observable<Talent>;
  constructor(private store: Store<AppState>) {
    this.talents = store.select('talent');
  }

  ngOnInit() {
  }
  removeTalent(index) {
    this.store.dispatch(new TalentActoins.RemoveTalent(index));
  }

}
