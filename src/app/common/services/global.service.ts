import {Injectable} from '@angular/core';
import {Site} from '../../places/models/site';
import {SiteService} from '../../places/services/site.service';
import {UserService} from '../../user/services/user.service';
import {User} from '../../user/models/user';
import {Observable} from 'rxjs';

@Injectable()
export class GlobalService {

  site: Site;
  private users: User[];
  private user: User;

  constructor(private  siteService: SiteService, private  userService: UserService) {

  }

  getUser() {
    this.userService.getAllUsers(this.site).subscribe((users: User[]) => {
      console.log(users);
      this.users = users;
      console.log('1' + this.users);
    });
  }

  getSite():Site {
   /* return this.siteService.getAllSite().subscribe((sites: Site[]) => {
      console.log('sites GS' + sites);
      this.site = sites[0];
      console.log('Const-site 1' + this.site);
    });*/
  return;
  }

  getAllUser(): User[] {
    return this.users;

  }
}
