import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {UserEffects} from '../state/user/user.effects';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

class MockUserService {
  public setContext() {}
}
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, MatMenuModule  ],
      declarations: [ DashboardComponent ],
      providers: [
        { provide: UserEffects, useClass: MockUserService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
