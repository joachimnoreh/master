import {Component} from '@angular/core';
import {SiteService} from './places/services/site.service';
import {TypeService} from './evenement/services/type.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( private typeService: TypeService, private siteService: SiteService) {

  }

  title = 'FreeMCI';
}
