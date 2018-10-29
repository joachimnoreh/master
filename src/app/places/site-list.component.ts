import {Component} from '@angular/core';
import {Site} from './models/site';
import {SiteService} from './services/site.service';
import {GlobalService} from '../common/services/global.service';
import {CommunicationService} from './services/communication.service';
import {Place} from './models/place';

@Component({
  selector: 'site-list',
  templateUrl: './template/site-liste.html'

})
export class SiteListComponent {

  site: Site;
  showPlaceCreation = false;
  placeSelectionner: Place;
  level: number;

  constructor(private  globalService: GlobalService,
              private siteService: SiteService,
              private  communicationService: CommunicationService) {
    this.site = globalService.getSite();
    communicationService.placeSelected$.subscribe((placeAndLevel: any) => this.onPlaceSelected(placeAndLevel));
  }

  private onPlaceSelected(couple: any) {
    this.placeSelectionner = couple[0];
    this.level = couple[1];
  }

  /*ngOnInit(): void {
   this.initSite();
  }*/

}


