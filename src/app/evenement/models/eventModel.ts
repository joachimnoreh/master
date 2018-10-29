import {LineModel} from './line-model';

export class EventModel {
  //site:Site;
  static id: number = 1;
  _id: string;
  name: string;
  //__v:number;
  lines: LineModel[];

  constructor() {
    this._id = '' + EventModel.id;
    this.lines = [];
    this.name = '';
    EventModel.id++;
  }

}


