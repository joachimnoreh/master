import {Component, Input, OnInit} from '@angular/core';
import {User} from './models/user';
import {UserService} from './services/user.service';


@Component({
  selector: 'user-form',
  templateUrl: './template/user-form.html'
})

export class UserFormComponent implements OnInit{


  @Input() user: User;

  submitted = false;

  constructor(private userService: UserService) {
    console.log(this.user);
  }

  createUser(): void {

    this.userService.createUser(this.user)
      .subscribe((user: User) => {
        console.log(user);
      });
  }

  onSubmit() {
    this.createUser();
    this.reset();
  }

  reset() {

    this.user = new User();

  }

  ngOnInit() {

    if (this.user === undefined) {
      this.user = new User();
    }
  }
}
