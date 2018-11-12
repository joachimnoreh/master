import {Component, OnInit} from '@angular/core';
import {Site} from '../places/models/site';
import {User} from './models/user';
import {UserService} from './services/user.service';

import {SiteService} from '../places/services/site.service';
import {TypeService} from '../evenement/services/type.service';
import {CommunicationUserService} from './services/communication.user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './template/users.html'


})
export class UsersComponent implements OnInit {

  title: 'Users';
  users: User[];
  private site: Site;

  constructor(private userService: UserService, private siteService: SiteService, private typeService: TypeService, private communicationUserService: CommunicationUserService) {
    this.userService.getAllUsers(this.site).subscribe((users: User[]) => {
      console.log(users);
      this.users = users;
      console.log(this.users);
    });
    this.communicationUserService.userComponentObservable.asObservable().subscribe((user) => this.users.push(user));
  }

  ngOnInit(): void {
    this.getSite();

  }

  private getSite(): void {
    this.siteService.getSite().subscribe((site: Site) => {
      this.site = site;
    });
  }
}


