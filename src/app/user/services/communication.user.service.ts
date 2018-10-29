import {EventEmitter, Injectable} from '@angular/core';

import {User} from '../models/user';

@Injectable()
export class CommunicationUserService {

  /* Communication entre les composants user-list et userForm */
  public userForm$: EventEmitter<any>;
  private user: User;

  constructor() {
    this.userForm$ = new EventEmitter();
  }

  public userAdded(): void {
    this.userForm$.emit();
  }
}
