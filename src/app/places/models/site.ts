import {Place} from './place';



export class Site {

  _id: string;
  name: string;
  placeRoot: Place;

  constructor(name: string, placeRoot: Place) {
    this.name = name;
    this.placeRoot = placeRoot;
  }
}


