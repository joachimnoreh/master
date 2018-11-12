import {EventEmitter, Injectable} from '@angular/core';

import {Subject} from 'rxjs';

import {Consigne} from '../models/consigne';

@Injectable()
export class CommunicationConsigneService {

  /* Communication entre les composants add-detail et place-detail */
  consigneSubject: Subject<Consigne>;

  constructor() {
    this.consigneSubject = new Subject<Consigne>();
  }

}
