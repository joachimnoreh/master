import {EventEmitter, Injectable} from '@angular/core';

import {User} from '../models/user';
import {Subject} from 'rxjs';

@Injectable()
export class CommunicationUserService {

  /* Communication entre les composants user-list et userForm */
  userComponentObservable: Subject<User>;

  constructor() {
    this.userComponentObservable = new Subject<User>();
  }

}
