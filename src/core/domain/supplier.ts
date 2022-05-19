'use strict';

export class Supplier {
  code: string;
  excludedItemsList: string = '-';
  id: number;
  legalName: string;
  name: string;

  get is(): string {
    return 'fds-core-domain.Supplier';
  }

  public constructor() { }
}
