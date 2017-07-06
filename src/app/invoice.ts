export class Invoice {
  id: number;
  accountId: number;
  name: string;
  amount: number;
  due: number;

  constructor(id: number, accountId: number, name: string,
              amount: number, due: number) {
    this.id = id;
    this.accountId = accountId;
    this.name = name;
    this.amount = amount;
    this.due = due;
  }

}
