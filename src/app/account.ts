import { Invoice } from './invoice'

export class Account {
  id: number;
  name: string;
  invoices: Array<Invoice>;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.invoices = [];
  }

}
