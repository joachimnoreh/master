import {Site} from '../../places/models/site';
import {Role} from '../../role/models/role';


export class User {
  _id: string;
  lastname: string;
  firstname: string;
  matricule: number;
  email: string;
  role: Role[];
  // present: boolean;
  site: Site;

  constructor() {

  }

}

