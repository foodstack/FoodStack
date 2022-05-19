'use strict';

import { Menu } from './menu';

export class MenuImage {
  public data: string;
  public id: number;
  public menu: Menu;
  public thumbnail: string;

  public static get is(): string {
    return 'fds-core-domain.MenuImage';
  }

  public constructor() { }
}
