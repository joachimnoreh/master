import {Component, OnInit} from '@angular/core';
import {Site} from '../places/models/site';
import {User} from './models/user';
import {UserService} from './services/user.service';
import {GlobalService} from '../common/services/global.service';
import {SiteService} from '../places/services/site.service';


@Component({
  selector: 'user-list',
  templateUrl: './template/user-list.html'


})
export class UserListComponent implements OnInit {

  title: 'Liste des users';
  private users: User[];
  private site: Site;

  constructor(private userService: UserService, private siteService: SiteService, private globalService: GlobalService) {
  }

  private getListUser(): void {
    this.userService.getAllUsers(this.site).subscribe((users: User[]) => {
      console.log(users);
      this.users = users;
      console.log(this.users);
    });
  }

  onSelect(user: User): void {

  }

  private getSite(): void {
    this.siteService.getAllSite().subscribe((sites: Site[]) => {
      this.site = sites[0];
      this.getListUser();
    });
  }

  ngOnInit(): void {
    this.getSite();

  }

}


