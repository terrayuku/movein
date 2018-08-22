import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentCreateComponent } from './talent-create.component';

describe('TalentCreateComponent', () => {
  let component: TalentCreateComponent;
  let fixture: ComponentFixture<TalentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
