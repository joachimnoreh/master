import {Component, Input, OnInit} from '@angular/core';


import {LineModel} from './models/lineModel';
import {CommunicationEditionEventService} from './services/communication.edition.event.service';
import {EventComponentModel} from './models/eventComponentModel';
import {GlobalService} from '../common/services/global.service';


@Component({
  selector: 'event-model-line-form',
  templateUrl: './template/line-model.html'

})
export class EditionModelLineComponent implements OnInit {

  @Input() lineModel: LineModel;
  totalComponentWidth: number;
  // TODO : declarer en const elsewhere
  MAX_SLOT_FOR_LINE = 12;
  DEFAULT_SLOT_NUMBER_LINE = 3;
  selectedElement: EventComponentModel;
  simulation:boolean =  false;

  constructor(private communicationEditionEventService: CommunicationEditionEventService, private globalService : GlobalService) {
    this.communicationEditionEventService.simulationSwitch$.subscribe((simulation: boolean) => this.simulation = simulation);
  }

  ngOnInit(): void {
    this.calculateTotalComponentWidth();
  }

  calculateTotalComponentWidth() {
    this.totalComponentWidth = 0;
    for (const componentModel in this.lineModel.componentModels) {
      this.totalComponentWidth = this.totalComponentWidth + this.lineModel.componentModels[componentModel].width;
    }
  }

  addElement() {
    const componentModel = new EventComponentModel();
    componentModel.width =  (this.totalComponentWidth + this.DEFAULT_SLOT_NUMBER_LINE > this.MAX_SLOT_FOR_LINE) ? this.MAX_SLOT_FOR_LINE - this.totalComponentWidth : this.DEFAULT_SLOT_NUMBER_LINE;
    componentModel.label = 'Name';
    componentModel.type = this.globalService.getType()[1];
    componentModel.values=[];
    this.lineModel.componentModels.push(componentModel);
    this.calculateTotalComponentWidth();
    console.log(this.totalComponentWidth);
    this.setSelectedelement(componentModel);

  }

  removeElement(element: EventComponentModel) {
    if (this.selectedElement === element) {
      this.selectedElement = null;
    }
    this.lineModel.componentModels.splice(this.lineModel.componentModels.indexOf(element), 1);

  }

  getTypes() {
    return this.globalService.getType();
  }

  setSelectedelement(element: EventComponentModel) {
    this.selectedElement = element;
    this.communicationEditionEventService.switchComponentModel(this.selectedElement);
  }

  validateModification() {
    if (this.selectedElement.type.name === 'choixMultiple') {
      this.selectedElement.values = this.selectedElement.value.split(';');
    }
  }

}
