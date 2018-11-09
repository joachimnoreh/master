import {EventEmitter, Injectable} from '@angular/core';


import {EventComponentModel} from '../models/eventComponentModel';

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

  public switchComponentModel(composantModel: EventComponentModel): void {
    this.componentModelSwitch$.emit(composantModel);
  }
}
