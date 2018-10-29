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
  number: number;
  selectedElement: ComposantModel;
  simulation: boolean = false;

  constructor(private communicationEditionEventService: CommunicationEditionEventService) {
    this.communicationEditionEventService.simulationSwitch$.subscribe((simulation: boolean) => this.simulation = simulation);
  }

  ngOnInit(): void {
    this.calculateNumber();
  }

  calculateNumber() {
    this.number = 0;
    for (var element in this.lineModel.elements) {
      this.number = this.number + this.lineModel.elements[element].width;
    }
  }

  addElement(ordre: number) {
    var element = new ComposantModel();
    element.width = 3;
    element.label = 'nom?';
    element.type = TYPES[0].name;

    this.lineModel.elements.push(element);
    this.calculateNumber();
    console.log(this.number);
    this.setSelectedelement(element);

  }

  removeElement(element: ComposantModel) {
    if (this.selectedElement == element) {
      this.selectedElement = null;
    }
    this.lineModel.elements.splice(this.lineModel.elements.indexOf(element), 1);

  }

  getTypes() {
    return TYPES;
  }

  setSelectedelement(element: ComposantModel) {
    this.selectedElement = element;
    this.communicationEditionEventService.switchComponentModel(this.selectedElement);
  }

  validateMofication() {
    if (this.selectedElement.type == 'choixMultiple') {
      this.selectedElement.values = this.selectedElement.value.split(';');
    }
  }

}


