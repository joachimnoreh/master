import {EventEmitter, Injectable} from '@angular/core';


import {ComposantModel} from '../models/composant-model';

@Injectable()
export class CommunicationEditionEventService {

  /* Communication entre les composants add-detail et place-detail */
  public simulationSwitch$: EventEmitter<any>;
  public componentModelSwitch$: EventEmitter<any>;

  private simulation: boolean;

  constructor() {
    this.simulationSwitch$ = new EventEmitter();
    this.componentModelSwitch$ = new EventEmitter();
  }

  public switchSimulation(simulation: boolean): void {
    this.simulationSwitch$.emit(simulation);
  }

  public switchComponentModel(composantModel: ComposantModel): void {
    this.componentModelSwitch$.emit(composantModel);
  }
}
