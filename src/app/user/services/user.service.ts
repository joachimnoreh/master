import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Site} from '../../places/models/site';
import {User} from '../models/user';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  private userUrl = 'users/';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getAllUsers(forSite: Site): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(this.userUrl, JSON.stringify(user), {headers: this.headers});

  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, JSON.stringify(user), {headers: this.headers});
  }

  removeUser(id: string): Observable<User> {
    return this.http.delete<User>(this.userUrl + id, {headers: this.headers});
  }
  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.userUrl + id, {headers: this.headers});
  }
  handleError(error: any): Observable<any> {
    console.error('error', error);
    return error;
  }


}
