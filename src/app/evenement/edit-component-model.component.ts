import {Component} from '@angular/core';
import {ComposantModel} from './models/composant-model';
import {CommunicationEditionEventService} from './services/communication.edition.event.service';
import {TYPES} from '../../../server/mock/data/types';

@Component({
  selector: 'edit-component-model',
  templateUrl: './template/edit-component-model.html'

})
export class EditComponentModelComponent {

  private composantModel: ComposantModel;

  constructor(private communicationEditionEventService: CommunicationEditionEventService) {
    this.communicationEditionEventService.componentModelSwitch$.subscribe((composantModel: ComposantModel) => this.composantModel = composantModel);

  }

  getTypes() {
    return TYPES;
  }

}



