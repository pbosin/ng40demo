import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Account } from '../../account';
import { AccountService } from '../../account.service';

@Component({
  templateUrl: './account-detail.component.html'
})

export class AccountDetailComponent implements OnInit {
  account: Account;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AccountService) {
  }

  ngOnInit() {
    this.account = this.service.getBlankAccount();
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if (id) {
        this.account = this.service.getCurrentAccount();
      } else {
        this.account = this.service.getBlankAccount();
      }
    });
  }

  save() {
    this.service.saveAccount(this.account).subscribe(
        () => this.router.navigate(['../'], { relativeTo: this.route }));
  }

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
