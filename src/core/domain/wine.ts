'use strict';

export class Wine {
  public body: string;
  public brand: string;
  public country: string;
  public grapes: string;
  public id: number;
  public inStock: boolean;
  public isRecommended: boolean;
  public region: string;
  public regionStyle: string;
  public subBrand: string;
  public subRegion: string;
  public tastingNote: string;
  public type: string;
  public varietal: string;
  public year: number;

  public static get is(): string {
    return 'fds-core-domain.Wine';
  }

  public constructor() { }
}
