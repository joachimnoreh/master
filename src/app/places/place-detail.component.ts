import {Component, Input, OnInit} from '@angular/core';
import {Place} from './models/place';
import {CommunicationService} from './services/communication.service';
import {GlobalService} from '../common/services/global.service';
import {PlaceService} from './services/place.service';

@Component({
  selector: 'place-detail',
  templateUrl: './template/detail_place.html'
})
export class PlaceDetailComponent implements OnInit {

  const;
  showPlaceCreation = false;
  @Input() selectedPlace: Place;
  @Input() level: number;
  edit: boolean;
  expanded = false;
  places: Place[];
  placeCreated: Place;

  constructor(private placeService: PlaceService,
              private communicationService: CommunicationService) {

  }

  ngOnInit(): void {
    this.getPlace();
    this.edit = false;
  }

  getPlace(): Place {
    return this.selectedPlace;

  }

  setEdition(toEdit: boolean) {
    this.edit = toEdit;
  }

  getlevel(): number {
    return this.level;
  }

  addSomething(place: Place) {
    console.log('addsmtg ' + this.level);
    this.communicationService.select([place, this.level]);
  }

  /* initSelectedPlace(){
     this.placeCreated = new Place('Nouveau lieu',globalService.getSite());
   }*/
  validateChange() {
    this.placeService.update(this.selectedPlace).subscribe((place: Place) => this.selectedPlace = place);
    this.setEdition(false);
    console.log('selected place apres changement' + this.selectedPlace);
  }

  save(): void {
    /* this.placeService.update(this.placeCreated);*/
  }

  goBack(): void {
    window.history.back();
  }

  private handleError(error: any): Promise<any> {
    console.error('error', error);
    return Promise.reject(error.message || error);
  }
}


