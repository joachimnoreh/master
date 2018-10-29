import {Injectable} from '@angular/core';
import {Site} from '../../places/models/site';
import {SiteService} from '../../places/services/site.service';
import {UserService} from '../../user/services/user.service';
import {User} from '../../user/models/user';

@Injectable()
export class GlobalService {

  site: Site;
  private users: User[];
  private user: User;

  constructor(private  siteService: SiteService, private  userService: UserService) {
    this.siteService.getAllSite().then((sites: Site[]) => {
      console.log('sites GS' + sites);
      this.site = sites[0];
      console.log('Const-site 1' + this.site);
    });
    console.log('Const-site 2' + this.site);
  }

  getUser() {
    this.userService.getAllUsers(this.site).then((users: User[]) => {
      console.log(users);
      this.users = users;
      console.log('1' + this.users);
    });
  }

  getSite(): Site {
    console.log('getSite() ' + this.site);
    return this.site;

  }

  getAllUser(): User[] {
    return this.users;

  }
}
