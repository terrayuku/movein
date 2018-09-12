import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSuccessComponent } from './personal-success.component';

describe('PersonalSuccessComponent', () => {
  let component: PersonalSuccessComponent;
  let fixture: ComponentFixture<PersonalSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
