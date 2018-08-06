import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnemployedCounterComponent } from './unemployed-counter.component';

describe('UnemployedCounterComponent', () => {
  let component: UnemployedCounterComponent;
  let fixture: ComponentFixture<UnemployedCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnemployedCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnemployedCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
