import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnemployedCounterComponent } from './unemployed-counter.component';
import {Counter} from '../Counter';

describe('UnemployedCounterComponent', () => {
  let component: UnemployedCounterComponent;
  let fixture: ComponentFixture<UnemployedCounterComponent>;
  let unemployedCountStub: Partial<Counter>;
  let counter: Counter;

  unemployedCountStub = {
    unemployedCount: 1000000000
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnemployedCounterComponent ],
      providers: [ { provide: Counter, unemployedCount: unemployedCountStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnemployedCounterComponent);
    component = fixture.componentInstance;
    counter = fixture.debugElement.injector.get(Counter);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
  it('unemployed object and injected counter should not be the same', () => {
    expect(unemployedCountStub === counter).toBe(false);
  });
});
