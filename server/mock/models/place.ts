export class Place {
  parent: Place;
  _id: string;
  name: string;
  placeChildren: Place[];
  __v: number;

  constructor(name: string, parent: Place) {
    this.name = name;
    this.parent = parent;
    this.placeChildren = new Array<Place>();
  }

  public getNormalizedName(): string {
    return this.name;

  }

}
