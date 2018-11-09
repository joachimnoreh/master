import {EventComponent} from './eventComponent';
import {LineModel} from './lineModel';

export class Line {
  _id: string;
  name: string;
  input:boolean;
  elements: EventComponent[];
  lineModel: LineModel;


  constructor() {
  }

}
