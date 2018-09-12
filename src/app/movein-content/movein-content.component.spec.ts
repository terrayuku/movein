import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveinContentComponent } from './movein-content.component';

describe('MoveinContentComponent', () => {
  let component: MoveinContentComponent;
  let fixture: ComponentFixture<MoveinContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveinContentComponent ]
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
