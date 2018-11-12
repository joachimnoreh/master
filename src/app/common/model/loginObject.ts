import {User} from '../../user/models/user';

export class LoginObject {
  user: User;
  token: string;

  constructor() {
  }
}
