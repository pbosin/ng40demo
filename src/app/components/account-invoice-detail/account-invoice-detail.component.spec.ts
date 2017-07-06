import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInvoiceDetailComponent } from './account-invoice-detail.component';

describe('AccountInvoiceDetailComponent', () => {
  let component: AccountInvoiceDetailComponent;
  let fixture: ComponentFixture<AccountInvoiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountInvoiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountInvoiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
