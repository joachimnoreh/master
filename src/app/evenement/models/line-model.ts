import {ComposantModel} from './composant-model';

export class LineModel {
  static id: number = 1;
  _id: string;
  name: string;
  input: boolean;
  elements: ComposantModel[];
  //__v:number;
  ordre: number;

  constructor() {
    this._id = '' + LineModel.id;
    LineModel.id++;
  }

}
