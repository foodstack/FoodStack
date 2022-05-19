'use strict';

import { Ingredient } from './ingredient';
import { Receipt } from './receipt';
import { Supplier } from './supplier';


export class SupplierIngredient {
  code: string;
  createdByReceipt: Receipt;
  description: string;
  id: number;
  ingredient: Ingredient;
  ingredientType: string;
  primaryPresentation: string;
  primaryPresentationQuantity: number;
  primaryProductionUnit: string;
  primaryProductionYield: number;
  secondaryPresentation: string;
  secondaryPresentationQuantity: number;
  secondaryProductionUnit: string;
  secondaryProductionYield: number;
  supplier: Supplier;
  unitPrice: number;

  public static get is(): string {
    return 'fds-core-domain.SupplierIngredient';
  }

  public constructor() { }
}
