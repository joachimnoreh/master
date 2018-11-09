import {Component} from '@angular/core';
import {CommunicationEditionEventService} from './services/communication.edition.event.service';
import {EventModel} from './models/eventModel';
import {LineModel} from './models/lineModel';
import {EventComponentModel} from './models/eventComponentModel';
import {EventModelService} from './services/event.model.service';

@Component({
  selector: 'edition-model-event',
  templateUrl: './template/edition-model-event.html'

})
export class EditionModelEvenementComponent {

  eventModel: EventModel;
  simulation: boolean = false;
  eventModelList: EventModel[];

  constructor(private eventModelService: EventModelService, private communicationEditionEventService: CommunicationEditionEventService) {
    this.eventModel = new EventModel();
    this.eventModelService.getEventModels().subscribe((eventModels: EventModel[]) => {

      this.eventModelList = eventModels;
    });
    this.communicationEditionEventService.simulationSwitch$.subscribe((simulation: boolean) => this.simulation = simulation);
  }


  addLine(order: number): void {
    let lineModel = new LineModel();
    lineModel.name = 'jj';
    lineModel.input = true;
    lineModel.componentModels = new Array<EventComponentModel>();
    lineModel.order = order + 1;
    this.upgradeIndex(lineModel.order);
    this.eventModel.lineModels.push(lineModel);
    this.eventModel.lineModels.sort(this.orderLine);
  }

  addTitleLine(): void {
    let lineModel = new LineModel();
    lineModel.name = 'Title';
    lineModel.input = false;
    lineModel.order = this.eventModel.lineModels.length;
    lineModel.componentModels = new Array<EventComponentModel>();
    console.log(lineModel);
    console.log( this.eventModel.lineModels.length);
    this.eventModel.lineModels.push(lineModel);
    console.log(this.eventModel.lineModels.length);
    console.log('new title ligne');
  }

  upgradeIndex(order: number) {
    for (order; order < this.eventModel.lineModels.length - 1; order++) {
      this.eventModel.lineModels[order].order = this.eventModel.lineModels[order].order + 1;
    }
  }

  save() {
 /*   if (this.eventModel._id) {
      this.eventModelService.updateEventModel(this.eventModel).subscribe((eventModel: EventModel) => {
        this.eventModel = eventModel;
        this.simulation = true;
      });
    } else {*/
      this.eventModelService.createEventModel(this.eventModel).subscribe((eventModel: EventModel) => {
        this.eventModel = eventModel;
        this.simulation = true;
      });
   // }
  //  this.simulation = true;
  }

  cancel() {
    this.eventModel = new EventModel();
  }
  setEvent(event: EventModel) {
    this.eventModel = event;
  }

  switchSimulation() {
    this.simulation = !this.simulation;
    this.communicationEditionEventService.switchSimulation(this.simulation);
  }

  orderLine(line1: LineModel, line2: LineModel): number {

    if (line1.order < line2.order) {
      return -1;
    }
    if (line1.order > line2.order) {
      return 1;
    }
    if (line1.order < line2.order) {
      return 0;
    }
  }
}


