import {EventEmitter, Injectable} from '@angular/core';


import {EventComponentModel} from '../models/eventComponentModel';
import {Subject} from 'rxjs';
import {EventModel} from '../models/eventModel';

@Injectable()
export class CommunicationEditionEventService {

  /* Communication entre les composants add-detail et place-detail */
  simulationSubject: Subject<boolean>;
  componentModelSubject: Subject<EventComponentModel>;
  eventModelSubject: Subject<EventModel>;
  constructor() {
    this.simulationSubject = new Subject<boolean>();
    this.componentModelSubject = new Subject<EventComponentModel>();
    this.eventModelSubject = new Subject<EventModel>();
  }

}
