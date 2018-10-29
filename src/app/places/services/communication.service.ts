import {EventEmitter, Injectable} from '@angular/core';

import {Place} from '../models/place';


@Injectable()
export class CommunicationService {

  /* Communication entre les composants add-detail et place-detail */
  public placeSelected$: EventEmitter<any>;
  private selectedPlace: Place;

  constructor() {
    this.placeSelected$ = new EventEmitter();
  }

  public select(placeAndLevel: any): void {
    this.placeSelected$.emit(placeAndLevel);
  }
}
