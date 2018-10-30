import {Component} from '@angular/core';
import {PlaceService} from './places/services/place.service';
import {SiteService} from './places/services/site.service';
import {GlobalService} from './common/services/global.service';
import {UserService} from './user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( private globalService: GlobalService) {
  }

  title = 'FreeMCI';
}
