import {Component} from '@angular/core';

import {CommunicationEditionEventService} from './services/communication.edition.event.service';
import {EventComponentModel} from './models/eventComponentModel';
import {TypeService} from './services/type.service';

import {EventComponentType} from './models/eventComponentType';


@Component({
  selector: 'app-edit-component-model',
  templateUrl: './template/edit-component-model.html'

})
export class EditEventComponentModelComponent {

  composantModel: EventComponentModel;
  stringTypeComponent: string;

  constructor(private communicationEditionEventService: CommunicationEditionEventService, private typeService: TypeService) {
    this.communicationEditionEventService.componentModelSubject.asObservable().subscribe(
      (eventComponentModel: EventComponentModel) => this.composantModel = eventComponentModel);
  }

  getTypes(): EventComponentType[] {
    return this.typeService.getType();
  }

  setType(newVal: string) {
    const types = this.getTypes();
    for (const i in types) {
      if (newVal === types[i].name) {
        this.composantModel.type = types[i];
      }
    }
  }
  validateModification() {
    if (this.composantModel.type.name === 'select') {
      this.composantModel.values = this.composantModel.value.split(';');
    }
  }

}



