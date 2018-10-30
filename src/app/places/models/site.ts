import {Place} from './place';



export class Site {
  static id = 1;
  _id: string;
  name: string;
  placeRoot: Place;
  __v: number;

  constructor(name: string, placeRoot: Place) {
    this.name = name;
    this._id = '' + Site.id;
    Site.id++;
    this.placeRoot = placeRoot;
  }
}


