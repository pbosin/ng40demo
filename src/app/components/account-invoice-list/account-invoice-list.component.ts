import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Account } from '../../account';
import { Invoice } from '../../invoice';
import { AccountService } from '../../account.service';

@Component({
  templateUrl: './account-invoice-list.component.html'
})
export class AccountInvoiceListComponent implements OnInit {
  account: Account;
  errorMessage: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AccountService) {
  }

  ngOnInit() {
    this.account = this.service.getCurrentAccount();
  }

  getAccount() {
    this.service.getAccount(this.account.id).subscribe(
        (account) => this.account = account,
        error =>  this.errorMessage = <any>error);
  }

  addInvoice () {
    this.router.navigate([0], { relativeTo: this.route });
  }
  editInvoice (invoice: Invoice) {
    this.service.setCurrentInvoice(invoice);
    this.router.navigate([invoice.id], { relativeTo: this.route });
  }
  deleteInvoice (invoice: Invoice) {
    this.service.deleteInvoice(this.account, invoice).subscribe(
        () => this.getAccount(),
        error =>  this.errorMessage = <any>error);
  }

}
