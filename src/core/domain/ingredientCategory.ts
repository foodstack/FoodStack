'use strict';

export class IngredientCategory {
  children: {}[];
  id: number;
  name: string;
  parent: IngredientCategory;

  public static get is(): string {
    return 'fds-core-domain.IngredientCategory';
  }

  public constructor() {
    this.children = [];
  }

  public add(child: IngredientCategory): void {
    if (!child)
      return;

    child.parent = this;
    this.children.push(child);
  }
}
