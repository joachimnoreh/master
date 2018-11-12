import {Component, Input, OnInit} from '@angular/core';
import {User} from './models/user';
import {UserService} from './services/user.service';
import {Site} from '../places/models/site';
import {SiteService} from '../places/services/site.service';
import {CommunicationUserService} from './services/communication.user.service';


@Component({
  selector: 'user-form',
  templateUrl: './template/user-form.html'
})

export class UserFormComponent implements OnInit {


  @Input() user: User;
  userSave: User;
  edit = false;
  submitted = false;
  private site: Site;
  constructor(private userService: UserService, private siteService: SiteService, private communicationServiceUser: CommunicationUserService) {

  }

  createUser(): void {
    if (this.user._id) {
      this.userService.update(this.user)
        .subscribe((user: User) => {
         this.user = user;
         this.edit = false;
        });
    } else {
      this.userService.createUser(this.user)
        .subscribe((user: User) => {
          this.communicationServiceUser.userComponentObservable.next(user);

        });
    }
  }

  reset() {
    if (this.user._id) {
      this.edit = false;
      this.userService.getUser(this.user._id).subscribe((user: User) => {
            this.user = user;
      });
    } else {
      this.user = new User();
    }
  }

  ngOnInit() {
    if (this.user === undefined) {
      this.user = new User();
      this.edit = true;
    }
  }

}
