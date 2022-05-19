'use strict';

import { Restaurant } from './restaurant';

export class User {
  public displayName: string;
  public id: string;
  public restaurants: Restaurant[];
  public email: string;

  public static get is(): string {
    return 'fds-core-domain.User';
  }

  public constructor() {
    this.restaurants = [];
  }

  public addRestaurant(restaurant) {
    this.restaurants.push(restaurant);
  }
}
