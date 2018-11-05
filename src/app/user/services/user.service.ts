import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Site} from '../../places/models/site';
import {User} from '../models/user';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  private userUrl = '/users/';
  private findUserUrl = 'findUser/';
  private updateUserUrl = 'updateUser/';
  private createUserUrl = 'createUser/';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getAllUsers(forSite: Site): Observable<User[]> {
    const url = this.findUserUrl;
    const config = {
      params: {site: forSite._id}
    };
    return this.http.get<User[]>(url);
  }

  update(user: User): Observable<User> {
    const url = this.updateUserUrl;
    return this.http.post<User>(url, JSON.stringify(user), {headers: this.headers});

  }

  createUser(user: User): Observable<User> {
    const url = this.createUserUrl;
    return this.http.post<User>(url, JSON.stringify(user), {headers: this.headers});
  }

  handleError(error: any): Observable<any> {
    console.error('error', error);
    return error;
  }

}
