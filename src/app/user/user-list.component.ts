import {Component, OnInit} from '@angular/core';
import {Site} from '../places/models/site';
import {User} from './models/user';
import {UserService} from './services/user.service';
import {GlobalService} from '../common/services/global.service';


@Component({
  selector: 'user-list',
  templateUrl: './template/user-liste.html'


})
export class UserListComponent implements OnInit {

  title: 'Liste des users';
  private users: User[];
  private site: Site;

  constructor(private userService: UserService, private globalService: GlobalService) {
    this.site = globalService.getSite();
  }

  getlistUser(): User[] {
    return this.users;

  }

  onSelect(user: User): void {

  }

  ngOnInit(): void {
    this.userService.getAllUsers(this.site).subscribe((users: User[]) => {
      console.log(users);
      this.users = users;
      console.log(this.users);
    });
  }

}


