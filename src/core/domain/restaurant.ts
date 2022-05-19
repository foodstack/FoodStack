'use strict';

import { Menu } from './menu';

export class Restaurant {
  code: string;
  id: number;
  legalName: string;
  locationLatitude: string;
  locationLongitude: string;
  menus: Menu[];
  name: string;

  public static get is(): string {
    return 'fds-core-domain.Restaurant';
  }

  public constructor() {
    this.menus = [];
  }

  public addMenu(menu: Menu): void {
    this.menus.push(menu);
  }
}
