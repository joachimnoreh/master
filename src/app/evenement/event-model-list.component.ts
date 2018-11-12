import {Component, Input, OnInit} from '@angular/core';


import {LineModel} from './models/lineModel';
import {CommunicationEditionEventService} from './services/communication.edition.event.service';
import {EventComponentModel} from './models/eventComponentModel';
import {TypeService} from '../evenement/services/type.service';
import {EventModel} from './models/eventModel';
import {EventModelService} from './services/event.model.service';



@Component({
  selector: 'app-event-models-list',
  templateUrl: './template/event-model-list.html'

})
export class EventModelListComponent  {

  simulation: boolean ;
  eventModelList: EventModel[];

  constructor(private eventModelService: EventModelService,
              private communicationEditionEventService: CommunicationEditionEventService) {
    this.simulation = false;
    this.eventModelService.getEventModels().subscribe((eventModels: EventModel[]) => {
      this.eventModelList = eventModels;
    });
  }

  deleteEvent(eventModel: EventModel) {
    if (eventModel._id) {
      this.eventModelService.deleteEventModel(eventModel).subscribe((eventModels: EventModel[]) => {
        this.eventModelList = eventModels;
      });
    }
  }
  setSelectedElement(eventModel: EventModel) {
    this.communicationEditionEventService.eventModelSubject.next(eventModel);
  }
  switchSimulation() {
    this.simulation = !this.simulation;
    this.communicationEditionEventService.simulationSubject.next(this.simulation);
  }
}
