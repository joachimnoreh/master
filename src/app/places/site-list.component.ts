import {Component, OnInit} from '@angular/core';
import {Site} from './models/site';
import {SiteService} from './services/site.service';
import {GlobalService} from '../common/services/global.service';
import {CommunicationService} from './services/communication.service';
import {Place} from './models/place';

@Component({
  selector: 'site-list',
  templateUrl: './template/site-liste.html'

})
export class SiteListComponent implements OnInit {

  site: Site;
  showPlaceCreation = false;
  placeSelectionner: Place;
  level: number;

  constructor(
    private siteService: SiteService,
    private  globalService: GlobalService,
    private  communicationService: CommunicationService) {
    communicationService.placeSelected$.subscribe((placeAndLevel: any) => this.onPlaceSelected(placeAndLevel));
  }

  private onPlaceSelected(couple: any) {
    this.placeSelectionner = couple[0];
    this.level = couple[1];
  }

  private getSite(): void {
    this.siteService.getAllSite().subscribe((sites: Site[]) => {
      console.log('sites GS' + sites);
      this.site = sites[0];
      console.log('Const-site' + this.site._id);
    });
  }

  ngOnInit(): void {
  this.getSite();
  }

}


