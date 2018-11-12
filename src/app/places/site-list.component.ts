import {Component, OnInit} from '@angular/core';
import {Site} from './models/site';
import {SiteService} from './services/site.service';
import {TypeService} from '../evenement/services/type.service';

import {CommunicationService} from './services/communication.service';
import {Place} from './models/place';

@Component({
  selector: 'app-site-list',
  templateUrl: './template/sites.html'

})
export class SiteListComponent implements OnInit {

  site: Site;
  showPlaceCreation = false;
  selectedPlace: Place;
  level: number;

  constructor(
    private siteService: SiteService,
    private  typeService: TypeService,
    private  communicationService: CommunicationService) {
    communicationService.placeSelected$.subscribe((placeAndLevel: any) => this.onPlaceSelected(placeAndLevel));
  }

  private onPlaceSelected(couple: any) {
    this.selectedPlace = couple[0];
    this.level = couple[1];
  }

  private getSite(): void {
    this.siteService.getSite().subscribe((site: Site) => {
      this.site = site;
     });
  }

  ngOnInit(): void {
  this.getSite();
  }

}


