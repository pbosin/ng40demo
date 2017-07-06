import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Account } from '../../account';
import { Invoice } from '../../invoice';
import { AccountService } from '../../account.service';

@Component({
  templateUrl: './account-invoice-detail.component.html'
})

export class AccountInvoiceDetailComponent implements OnInit {
  account: Account;
  invoice: Invoice;
  errorMessage: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AccountService) {
  }

  ngOnInit() {
    this.account = this.service.getCurrentAccount();
    this.invoice = this.service.getBlankInvoice(this.account);
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if (id) {
        this.invoice = this.service.getCurrentInvoice();
      } else {
        this.invoice = this.service.getBlankInvoice(this.account);
      }
    });
  }

  save() {
    this.service.saveInvoice(this.account, this.invoice).subscribe(
        () => {
          this.service.getAccount(this.account.id).subscribe(
              (account) => {
                this.service.setCurrentAccount(account);
                this.router.navigate(['../'], { relativeTo: this.route });
              },
              error =>  this.errorMessage = <any>error);
        });
  }

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
