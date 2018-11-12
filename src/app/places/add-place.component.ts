import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PlaceService} from './services/place.service';
import {Place} from './models/place';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-places',
  templateUrl: './template/form-add-places.html'
})
export class AddPlaceComponent implements OnInit, OnChanges {

  @Input()
  selectedPlace: Place;
  showPlaceCreation = false;
  @Input()
  level: number;
  title: string;
  errorMessages: string[] = [];
  placeRoot: Place;
  editable = true;
  newPlace: Place;

  constructor(private placeService: PlaceService, private fb: FormBuilder) {

  }

  validateOne(): void {
    if (this.level <= 4) {
      this.placeService.createPlace(this.newPlace).subscribe((place: Place) => {
          this.selectedPlace.placeChildren.push(place);
          this.ngOnInit();
        }
      );

    }
  }

  annuler(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.errorMessages.length = 0;
    this.controlLevel();
  }

  getEditable(): boolean {
    return (this.level < 5);
  }

  controlLevel(): void {
    if (this.level > 4) {
      this.errorMessages.push('Arborescence limitée à 5 niveaux');
    }
  }

  ngOnInit(): void {
    this.newPlace = new Place(null, this.selectedPlace);
  }

}


