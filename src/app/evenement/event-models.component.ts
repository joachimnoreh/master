import {Component, Input, OnInit} from '@angular/core';


import {LineModel} from './models/lineModel';
import {CommunicationEditionEventService} from './services/communication.edition.event.service';
import {EventComponentModel} from './models/eventComponentModel';
import {TypeService} from '../evenement/services/type.service';
import {EventModel} from './models/eventModel';
import {EventModelService} from './services/event.model.service';



@Component({
  selector: 'app-event-models',
  templateUrl: './template/event-models.html'

})
export class EventModelsComponent  {


  constructor() {

  }

}
