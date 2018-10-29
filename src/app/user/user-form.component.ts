import {Component, Input} from '@angular/core';
import {User} from './models/user';
import {UserService} from './services/user.service';


@Component({
  selector: 'user-form',
  templateUrl: './template/user-form.html'
})

export class UserFormComponent {


  @Input() user: User;

  submitted = false;

  constructor(private userService: UserService) {
    console.log(this.user);
  }

  createUser(): void {

    this.userService.createUser(this.user)
      .then(user => {
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
