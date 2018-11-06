import {Component, Input, OnInit} from '@angular/core';

import {ComposantModel} from './models/composant-model';
import {LineModel} from './models/line-model';
import {CommunicationEditionEventService} from './services/communication.edition.event.service';
import {TYPES} from '../../../server/mock/data/types';

@Component({
  selector: 'event-model-line-form',
  templateUrl: './template/line-model.html'

})
export class EditionModelLineComponent implements OnInit {

  @Input() lineModel: LineModel;
  totalComponentWidth: number;
  selectedElement: ComposantModel;
  simulation: false;

  constructor(private communicationEditionEventService: CommunicationEditionEventService) {
    this.communicationEditionEventService.simulationSwitch$.subscribe((simulation: boolean) => this.simulation = simulation);
  }

  ngOnInit(): void {
    this.calculateNumber();
  }

  calculateNumber() {
    this.totalComponentWidth = 0;
    for (let componentModel in this.lineModel.componentModels) {
      this.totalComponentWidth = this.totalComponentWidth + this.lineModel.componentModels[componentModel].width;
    }
  }

  addElement() {
    let componentModel = new ComposantModel();
    componentModel.width = 3;
    componentModel.label = 'Name';
    componentModel.type = TYPES[0].name;
    this.lineModel.componentModels.push(componentModel);
    this.calculateNumber();
    console.log(this.totalComponentWidth);
    this.setSelectedelement(componentModel);

  }

  removeElement(element: ComposantModel) {
    if (this.selectedElement === element) {
      this.selectedElement = null;
    }
    this.lineModel.componentModels.splice(this.lineModel.componentModels.indexOf(element), 1);

  }

  getTypes() {
    return TYPES;
  }

  setSelectedelement(element: ComposantModel) {
    this.selectedElement = element;
    this.communicationEditionEventService.switchComponentModel(this.selectedElement);
  }

  validateModification() {
    if (this.selectedElement.type === 'choixMultiple') {
      this.selectedElement.values = this.selectedElement.value.split(';');
    }
  }

}


