import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {RegisterComponent} from '../register/register.component';
import {UnemployedCounterComponent} from '../unemployed-counter/unemployed-counter.component';
import {MoveinComponent} from '../movein/movein.component';
import {ContactDetailsComponent} from '../contact-details/contact-details.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MatDialog} from '@angular/material';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, RegisterComponent, UnemployedCounterComponent, MoveinComponent, ContactDetailsComponent ],
      providers: [ { provide: MatDialog, useValue: {} }],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
