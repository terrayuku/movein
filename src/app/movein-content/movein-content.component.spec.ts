import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveinContentComponent } from './movein-content.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MatCardModule} from '@angular/material';

describe('MoveinContentComponent', () => {
  let component: MoveinContentComponent;
  let fixture: ComponentFixture<MoveinContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveinContentComponent ],
      providers: [{ provide: MatCardModule, useValue: {} }],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveinContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
