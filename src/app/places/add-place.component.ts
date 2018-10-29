import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PlaceService} from './services/place.service';
import {Place} from './models/place';


@Component({
  selector: 'add-place',
  templateUrl: './template/add_places.html'
})
export class AddPlaceComponent implements OnInit, OnChanges {

  @Input()
  placeSelectionner: Place;
  showPlaceCreation = false;
  @Input()
  level: number;
  title: string;
  errorMessages: string[] = new Array<string>();
  placeRoot: Place;
  editable: boolean = true;
  placeCreated: Place;
  min: string;
  max: string;
  multipleName: string;

  constructor(private placeService: PlaceService) {

  }

  valider(): void {
    if (this.level <= 4) {
      this.placeService.createPlace(this.placeCreated);
    }
  }

  annuler(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.errorMessages.length = 0;
    this.min = '';
    this.max = '';
    this.multipleName = '';
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
    this.placeCreated = new Place('', this.placeSelectionner);

  }

}


