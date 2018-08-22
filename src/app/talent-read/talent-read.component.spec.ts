import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentReadComponent } from './talent-read.component';

describe('TalentReadComponent', () => {
  let component: TalentReadComponent;
  let fixture: ComponentFixture<TalentReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
