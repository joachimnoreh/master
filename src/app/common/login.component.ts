
import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {User} from '../user/models/user';
import {AuthService} from './services/auth.service';
import {LoginObject} from './model/loginObject';

@Component({
  selector: 'app-login',
  templateUrl: './template/login.component.html'
})
export class LoginComponent {
  message: string;
  user : User;
  constructor(public authService: AuthService, public router: Router) {
    this.user = new User();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.token ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';
    console.log(this.message);
    this.authService.login(this.user).subscribe((loginObject: LoginObject) => {
      this.setMessage();
      if (loginObject.token) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'users';

        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
