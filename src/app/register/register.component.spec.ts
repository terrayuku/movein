import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import {MatDialog} from '@angular/material';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  // let register: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers: [ { provide: MatDialog, useValue: {} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a button register', () => {
    const register = fixture.debugElement.componentInstance;
    expect(register.register).toEqual('REGISTER');
  });
  it('should have a button sigin', () => {
    const register = fixture.debugElement.componentInstance;
    expect(register.signin).toEqual('SIGN IN');
  });
});
