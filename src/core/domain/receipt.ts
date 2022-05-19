'use strict';

import { Restaurant } from './restaurant';
import { Purchase } from './purchase';

export class Receipt {
  public static get is(): string {
    return 'fds-core-domain.Receipt';
  }

  public code: string;
  public date: Date;
  public id: number;
  public purchases: Purchase[];
  public restaurant: Restaurant;
  public reviewed: boolean = false;
  public status: string;
  public subtotal: number;
  public tax: number;
  public total: number;
  public type: string;

  public constructor() {
    this.purchases = [];
  }

  public add(purchase: Purchase): void {
    this.purchases.push(purchase);
    purchase.receipt = this;
  }

  public remove(purchase: Purchase): boolean {
    if (!purchase)
      return false;

    let index: number = -1;
    const purchaseId: number = purchase.id;

    this.purchases.find((p: Purchase, i: number, ps: Purchase[]) => {
      if (p.id === purchaseId) {
        index = i;
        return true;
      }

      return false;
    });

    if (index === -1)
      return false;

    this.purchases.splice(index, 1);
    return true;
  }
}
