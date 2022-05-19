'use strict';

import { IngredientCategory } from './ingredientCategory';

export class Ingredient {
  description: string;
  id: number;
  ingredientCategory: IngredientCategory;
  name: string;

  public static get is(): string {
    return 'fds-core-domain.Ingredient';
  }

  public constructor() { }
}
