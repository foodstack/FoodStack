'use strict';

import { Receipt } from './receipt';
import { SupplierIngredient } from './supplierIngredient';


export class Purchase {
  description: string;
  id: number;
  price: number;
  purchaseEntry: string;
  quantity: number;
  receipt: Receipt;
  status: string;
  supplierIngredient: SupplierIngredient;
  total: number;

  public static get is(): string {
    return 'fds-core-domain.Purchase';
  }

  public constructor() { }
}
