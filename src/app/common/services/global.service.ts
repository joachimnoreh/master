import {Injectable} from '@angular/core';
import {Site} from '../../places/models/site';
import {SiteService} from '../../places/services/site.service';
import {UserService} from '../../user/services/user.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {EventComponentType} from '../../evenement/models/eventComponentType';

@Injectable()
export class GlobalService {

  site: Site;
  private types: EventComponentType[];
  private urlType = 'types/';


  constructor(private  siteService: SiteService, private  userService: UserService, private http: HttpClient) {
    this.retrieveType().subscribe((types: EventComponentType[]) => {
      this.types = types;
      console.log(this.types);
    });
  }

  retrieveType(): Observable<EventComponentType[]> {
    return this.http.get<EventComponentType[]>(this.urlType);
  }
  getType(): EventComponentType[] {
    return this.types;
  }
  /*getUser() {
     this.userService.getAllUsers(this.site).subscribe((users: User[]) => {
       console.log(users);
       this.users = users;
       console.log('1' + this.users);
     });
   }
 */
  /*
    getSite(): Site {
      /* return this.siteService.getSite().subscribe((sites: Site[]) => {
         console.log('sites GS' + sites);
         this.site = sites[0];
         console.log('Const-site 1' + this.site);
       });
      return;
    }
  */

}
