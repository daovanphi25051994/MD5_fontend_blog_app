import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreateFormComponent } from './customer-create-form.component';

describe('CustomerCreateFormComponent', () => {
  let component: CustomerCreateFormComponent;
  let fixture: ComponentFixture<CustomerCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
