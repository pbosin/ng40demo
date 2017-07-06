import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { AccountInvoiceListComponent } from './components/account-invoice-list/account-invoice-list.component';
import { AccountInvoiceDetailComponent } from './components/account-invoice-detail/account-invoice-detail.component';

export const routes: Routes = [
  { path: 'accounts', component: AccountsComponent, children: [
    { path: '', component: AccountListComponent },
    { path: 'invoices', component: AccountInvoiceListComponent },
    { path: ':id', component: AccountDetailComponent },
    { path: 'invoices/:id', component: AccountInvoiceDetailComponent },
  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AccountsRoutingModule { }
