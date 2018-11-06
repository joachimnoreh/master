import {Component, Input, OnInit} from '@angular/core';
import {User} from './models/user';
import {UserService} from './services/user.service';


@Component({
  selector: 'user-form',
  templateUrl: './template/user-form.html'
})

export class UserFormComponent implements OnInit {


  @Input() user: User;
  userSave: User;
  edit = false;
  submitted = false;

  constructor(private userService: UserService) {
    console.log(this.user);
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
          console.log(user);
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
