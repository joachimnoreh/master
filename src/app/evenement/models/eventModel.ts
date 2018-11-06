import {LineModel} from './line-model';
import {Site} from '../../places/models/site';
import {ComposantModel} from './composant-model';

export class EventModel {
  site: Site;
  _id: string;
  name: string;
  lineModels: LineModel[];

  constructor() {
    this.lineModels = new Array<LineModel>();
  }

}


