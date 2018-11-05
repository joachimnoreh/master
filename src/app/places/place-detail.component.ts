import {Component, Input, OnInit} from '@angular/core';
import {Place} from './models/place';
import {CommunicationService} from './services/communication.service';
import {FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
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
    this.communicationService.select([place, this.level]);
  }

  /* initSelectedPlace(){
     this.newPlace = new Place('Nouveau lieu',globalService.getSite());
   }*/
  validateChange() {
    this.placeService.update(this.selectedPlace).subscribe((place: Place) => this.selectedPlace = place);
    this.setEdition(false);
   }

  save() {
    /*this.setEdition(false);
    console.log('selected place apres changement' + this.selectedPlace);*/

  }

  goBack(): void {
    window.history.back();
  }

  private handleError(error: any): Promise<any> {
    console.error('error', error);
    return Promise.reject(error.message || error);
  }
}


