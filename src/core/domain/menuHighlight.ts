'use strict';

import { MenuItem } from './menuItem';

export class MenuHighlight {
  public callToAction: string;
  public id: number;
  public menuItem: MenuItem;

  public servingDateEnd: Date;
  public servingDateStart: Date;
  public servingTimeEnd: Date;
  public servingTimeStart: Date;

  public subTitle: string;
  //public textAlign:string;
  public title: string;

  public static get is(): string {
    return 'fds-core-domain.MenuHighlight';
  }

  public constructor() { }
}
