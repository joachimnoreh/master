import {Line} from './line';
import {Site} from '../../places/models/site';

export class Event {
  _id: string;
  name: string;
  lines: Line[];
  //__v:number;
  site: Site;

  constructor() {
  }

}


