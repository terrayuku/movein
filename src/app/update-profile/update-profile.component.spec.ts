import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UpdateProfileComponent } from './update-profile.component';
import {ProfileEffects} from '../state/profile/profile.effects';

describe('UpdateProfileComponent', () => {
  let component: UpdateProfileComponent;
  let fixture: ComponentFixture<UpdateProfileComponent>;

  class MockUserService {
    public setContext() {}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProfileComponent ],
      providers: [{ provide: ProfileEffects, useClass: MockUserService }],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
