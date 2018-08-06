import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsComponent } from './contact-details.component';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have email', () => {
    const contactComponent = fixture.debugElement.componentInstance;
    expect(contactComponent.email).toEqual('support@movein.com');
  });
  it('should have message', () => {
    const contactComponent = fixture.debugElement.componentInstance;
    const message = 'You can contact our support team for further information about the MOVEIN platform.';
    expect(contactComponent.message).toEqual(message);
  });
});
