'use strict';

import { MenuItem } from './menuItem';

export class MenuCustomization {
  public id: number;
  public max: number;
  private menuItems: MenuItem[];
  public min: number;
  public name: string;

  public static get is(): string {
    return 'fds-core-domain.MenuCustomization';
  }

  public constructor() {
    this.menuItems = [];
  }
}
