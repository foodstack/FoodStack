'use strict';

export class GeographicalArea {
  public static get is(): string {
    return 'fds-core-domain.GeographicalArea';
  }

  public constructor(
    public longitudeNorth: number,
    public latitudeEast: number,
    public longitudeSouth: number,
    public latitudeWest: number) { }
}
