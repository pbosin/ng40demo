import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Account } from '../../account';
import { AccountService } from '../../account.service';

@Component({
  templateUrl: './account-list.component.html'
})
export class AccountListComponent implements OnInit {
  accounts: Account[];
  errorMessage: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private accountService: AccountService ) {
  }

  getAccounts() {
    this.accountService.getAccounts().subscribe(
        accounts => this.accounts = accounts,
        error =>  this.errorMessage = <any>error);
  }
  ngOnInit() {
    this.getAccounts();
  }

  addNew() {
    this.router.navigate([0], { relativeTo: this.route });
  }
  edit(account: Account) {
    this.accountService.setCurrentAccount(account);
    this.router.navigate([account.id], { relativeTo: this.route });
  }
  deleteAccount(account: Account) {
    this.accountService.deleteAccount(account).subscribe(
      () => this.getAccounts(),
      error =>  this.errorMessage = <any>error);
  }
  invoices(account: Account) {
    this.accountService.setCurrentAccount(account);
    this.router.navigate(['./invoices'], { relativeTo: this.route });
  }

}
