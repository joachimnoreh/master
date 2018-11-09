import {EventComponentModel} from '../models/eventComponentModel';

export class LineModel {
  _id: string;
  name: string;
  input: boolean;
  componentModels: EventComponentModel[];
  order: number;

  constructor() {
  }

}
