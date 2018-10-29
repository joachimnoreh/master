import {Component} from '@angular/core';
import {CommunicationEditionEventService} from './services/communication.edition.event.service';
import {ComposantModel} from './models/composant-model';
import {EventModel} from './models/eventModel';
import {LineModel} from './models/line-model';
import {EventModelService} from './services/event.model.service';
import {EVENT_MODELS} from '../../../server/mock/data/eventModel';

@Component({
  selector: 'edition-model-event',
  templateUrl: '../template/panel-model-event.html'

})
export class EditionModelEvenementComponent {

  private eventModel: EventModel;
  private simulation: boolean = false;
  private eventModels: EventModel[];

  constructor(private eventModelService: EventModelService, private communicationEditionEventService: CommunicationEditionEventService) {
    this.eventModelService.getAllEvenementModele().then((eventModels: EventModel[]) => {
      this.eventModel = new EventModel();
      this.eventModels = eventModels;
    });
    this.communicationEditionEventService.simulationSwitch$.subscribe((simulation: boolean) => this.simulation = simulation);
  }


  addLine(ordre: number): void {
    var lineModel = new LineModel();
    lineModel.name = '';
    lineModel.input = true;
    lineModel.elements = new Array<ComposantModel>();
    lineModel.ordre = ordre + 1;
    this.upgradeIndex(lineModel.ordre);
    this.eventModel.lines.push(lineModel);
    this.eventModel.lines.sort(this.ordreLine);
  }

  addTitleLine(): void {
    var lineModel = new LineModel();
    lineModel.name = 'Title';
    lineModel.input = false;
    lineModel.ordre = this.eventModel.lines.length;
    lineModel.elements = new Array<ComposantModel>();
    this.eventModel.lines.push(lineModel);
  }

  upgradeIndex(ordre: number) {
    for (ordre; ordre < this.eventModel.lines.length - 1; ordre++) {
      this.eventModel.lines[ordre].ordre = this.eventModel.lines[ordre].ordre + 1;
    }
  }

  save() {
    console.log();
  }

  createEvent() {

    console.log(JSON.stringify(this.eventModel));
    this.eventModel = new EventModel();
  }

  setEvent(event: EventModel) {
    this.eventModel = event;
  }

  switchSimulation() {
    this.simulation = !this.simulation;
    this.communicationEditionEventService.switchSimulation(this.simulation);
  }

  ordreLine(line1: LineModel, line2: LineModel): number {

    if (line1.ordre < line2.ordre)
      return -1;
    if (line1.ordre > line2.ordre)
      return 1;
    if (line1.ordre < line2.ordre)
      return 0;
  }
}


