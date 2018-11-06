import {Site} from '../../places/models/site';
import {Action} from './action';


export class Role {
  _id: string;
  name: string;
  autorization: Action[];
  constructor() {
  }
}

