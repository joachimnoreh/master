import {LineModel} from './lineModel';
import {Site} from '../../places/models/site';


export class EventModel {
  site: Site;
  _id: string;
  name: string;
  lineModels: LineModel[];

  constructor() {
    this.lineModels = new Array<LineModel>();
  }

}


