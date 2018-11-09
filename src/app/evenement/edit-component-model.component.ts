import {Component} from '@angular/core';

import {CommunicationEditionEventService} from './services/communication.edition.event.service';
import {EventComponentModel} from './models/eventComponentModel';
import {GlobalService} from '../common/services/global.service';
import {EventComponentType} from './models/eventComponentType';


@Component({
  selector: 'edit-component-model',
  templateUrl: './template/edit-component-model.html'

})
export class EditComponentModelComponent {

  composantModel: EventComponentModel;
  stringTypeComponent: string;

  constructor(private communicationEditionEventService: CommunicationEditionEventService, private globalService: GlobalService) {
    this.communicationEditionEventService.componentModelSwitch$.subscribe((composantModel: EventComponentModel) => this.composantModel = composantModel);

  }

  getTypes(): EventComponentType[] {
    return this.globalService.getType();
  }

  setType(newVal: string) {
    const types = this.getTypes();
    for (let i in types) {
      if (newVal === types[i].name) {
        this.composantModel.type = types[i];
      }
    }
  }

}



