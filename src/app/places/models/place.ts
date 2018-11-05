export class Place {
  static id = 0;
  parent: Place;
  _id: string;
  name: string;
  placeChildren: Place[];
  __v: number;

  constructor(name: string, parent: Place) {
    this.name = name;
    this._id = '' + Place.id;
    Place.id++;
    this.parent = parent;
    this.placeChildren = new Array<Place>();
  }

  public getNormalizedName(): string {
    return this.name;

  }

}
