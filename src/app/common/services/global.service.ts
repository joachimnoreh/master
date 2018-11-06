import {Injectable} from '@angular/core';
import {Site} from '../../places/models/site';
import {SiteService} from '../../places/services/site.service';
import {UserService} from '../../user/services/user.service';
import {Observable} from 'rxjs';
import {Type} from '../../evenement/models/type';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GlobalService {

  site: Site;
  private types: Type[];
  private urlType = 'types/';


  constructor(private  siteService: SiteService, private  userService: UserService, private http: HttpClient) {
    this.getType().subscribe((types: Type[]) => {
      this.types = types;
      console.log(this.types);
    });
  }

  getType(): Observable<Type[]> {
    return this.http.get<Type[]>(this.urlType);
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
