import {ComposantModel} from './composant-model';

export class LineModel {
  _id: string;
  name: string;
  input: boolean;
  componentModels: ComposantModel[];
  order: number;

  constructor() {
  }

}
