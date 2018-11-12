import {Component, Input, OnInit} from '@angular/core';


import {LineModel} from './models/lineModel';
import {CommunicationEditionEventService} from './services/communication.edition.event.service';
import {EventComponentModel} from './models/eventComponentModel';
import {TypeService} from './services/type.service';


@Component({
  selector: 'app-edit-line-model',
  templateUrl: './template/edit-line-model.html'

})
export class EditLineModelComponent implements OnInit {

  @Input() lineModel: LineModel;
  totalComponentWidth: number;
  // TODO : declarer en const elsewhere
  MAX_SLOT_FOR_LINE = 12;
  DEFAULT_SLOT_NUMBER_LINE = 3;
  simulation: boolean = false;

  constructor(private communicationEditionEventService: CommunicationEditionEventService, private typeService: TypeService) {
    this.communicationEditionEventService.simulationSubject.asObservable().subscribe((simulation: boolean) => this.simulation = simulation);
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
    componentModel.width = (this.totalComponentWidth + this.DEFAULT_SLOT_NUMBER_LINE > this.MAX_SLOT_FOR_LINE) ? this.MAX_SLOT_FOR_LINE - this.totalComponentWidth : this.DEFAULT_SLOT_NUMBER_LINE;
    componentModel.label = 'Name';
    componentModel.type = this.typeService.getType()[0];
    componentModel.values = [];
    this.lineModel.componentModels.push(componentModel);
    this.calculateTotalComponentWidth();
    this.communicationEditionEventService.componentModelSubject.next(componentModel);
  }

  removeElement(element: EventComponentModel) {
    this.lineModel.componentModels.splice(this.lineModel.componentModels.indexOf(element), 1);
  }

  getTypes() {
    return this.typeService.getType();
  }

  setSelectedElement(eventComponentModel: EventComponentModel) {
    this.communicationEditionEventService.componentModelSubject.next(eventComponentModel);
  }

}
