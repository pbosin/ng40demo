import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Account } from './account';
import { Invoice } from './invoice';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService {
  private apiUrl = 'http://thinkful-pb-1.getsandbox.com/';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});
  private account: Account;
  private invoice: Invoice;

  constructor (
      private http: Http
    ) {}

  public getAccounts (): Observable<Account[]> {
    return this.http.get(this.apiUrl + 'accounts')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  public getBlankAccount (): Account {
    return new Account(0, '');
  }
  public setCurrentAccount (account: Account) {
    this.account = account;
  }
  public getCurrentAccount (): Account {
    return this.account;
  }
  public getAccount (id: number): Observable<Account> {
    return this.http.get(`${this.apiUrl}accounts/${id}`)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public deleteAccount (account: Account) {
    let url = `${this.apiUrl}accounts/${account.id}`;
    let options = new RequestOptions({ headers: this.headers });
    return this.http.delete(url, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public saveAccount (account: Account) {
    let url = this.apiUrl + 'accounts' + ((account.id) ? ('/'+account.id) : '');
    let body = JSON.stringify(account);
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(url, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public getBlankInvoice (account: Account): Invoice {
    return new Invoice(0, account.id, '', 0, 0);
  }
  public setCurrentInvoice (invoice: Invoice) {
    this.invoice = invoice;
  }
  public getCurrentInvoice (): Invoice {
    return this.invoice;
  }

  public deleteInvoice(account: Account, invoice: Invoice) {
    let url = `${this.apiUrl}accounts/${account.id}/invoices/${invoice.id}`;
    let options = new RequestOptions({ headers: this.headers });
    return this.http.delete(url, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public saveInvoice(account: Account, invoice: Invoice) {
    let url = this.apiUrl + 'accounts/' + account.id + '/invoices' +
        ((invoice.id) ? ('/'+invoice.id) : '');
    let body = JSON.stringify(invoice);
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(url, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

}
