'use strict';

import { MenuCustomization } from './menuCustomization';
import { MenuHighlight } from './menuHighlight';
import { MenuItem } from './menuItem';
import { Restaurant } from './restaurant';

export class Menu {
  private customizations: MenuCustomization[];
  private highlights: MenuHighlight[];
  public id: number;
  private menuItems: MenuItem[];
  public restaurant: Restaurant;
  public version: number;

  navigationProperties: {
    Images: { type: 'MenuImage', hasMany: true }
  };

  public static get is(): string {
    return 'fds-core-domain.Menu';
  }

  public constructor() {
    this.menuItems = [];
    this.highlights = [];
    this.customizations = [];
  }

  public getMenuItemById(id: number): MenuItem {
    return this.menuItems.find((mi: MenuItem, i: number, mis: MenuItem[]) => mi.id === id);
  }

  public getItemByName(name: string): MenuItem {
    return this.menuItems.find((mi: MenuItem, i: number, mis: MenuItem[]) => mi.name === name);
  }

  public addHighlight(highlight: MenuHighlight): void {
    this.highlights.push(highlight);
  }
}
