import {Line} from './line';
import {Site} from '../../places/models/site';
import {EventModel} from './eventModel';

export class Event {
  _id: string;
  name: string;
  lines: Line[];
  eventModel: EventModel;
  site: Site;

  constructor() {
  }

}


