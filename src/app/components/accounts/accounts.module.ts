import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AccountsRoutingModule } from '../../accounts-routing.module'
import { AccountListComponent }  from '../account-list/account-list.component';
import { AccountDetailComponent }  from '../account-detail/account-detail.component';
import { AccountInvoiceListComponent }  from '../account-invoice-list/account-invoice-list.component';
import { AccountInvoiceDetailComponent } from '../account-invoice-detail/account-invoice-detail.component';

import { AccountService } from '../../account.service';
import { AccountsComponent } from '../accounts/accounts.component';


@NgModule({
  imports: [
    AccountsRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    AccountListComponent,
    AccountDetailComponent,
    AccountInvoiceListComponent,
    AccountInvoiceDetailComponent,
    AccountsComponent
  ],
  providers: [
    AccountService
  ]
})

export class AccountsModule { }
