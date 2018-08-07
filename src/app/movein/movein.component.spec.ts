import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MoveinComponent } from './movein.component';

describe('MoveinComponent', () => {
  let component: MoveinComponent;
  let fixture: ComponentFixture<MoveinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveinComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have message', () => {
    const moveinComponent = fixture.debugElement.componentInstance;
    const movein = 'The MOVEIN platform is a platform that aims in equipping and directing the unemployed individuals to specific materials ' +
      'that are market and industry relevant at that point in time for their career of choice. This platform is an information ' +
      'centered platform to guide and provide online training assessments to unemployed individuals.';
    expect(moveinComponent.movein).toEqual(movein);
  });
});
