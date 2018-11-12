import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Site} from '../../places/models/site';
import {User} from '../models/user';
import {Observable, of} from 'rxjs';
import {SiteService} from '../../places/services/site.service';
import {MessageService} from '../../common/services/message.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class UserService {

  private userUrl = 'users/';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getAllUsers(forSite: Site): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(this.userUrl, JSON.stringify(user), {headers: this.headers}).pipe(
      catchError(this.handleError<User>('getHeroes', '', ))
    );

  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, JSON.stringify(user), {headers: this.headers}).pipe(
      catchError(this.handleError<User>('getHeroes', '', ))
    );
  }

  removeUser(id: string): Observable<User> {
    return this.http.delete<User>(this.userUrl + id, {headers: this.headers}).pipe(
      catchError(this.handleError<User>('getHeroes', '', ))
    );
  }
  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.userUrl + id, {headers: this.headers}).pipe(
      catchError(this.handleError<User>('getHeroes', '', ))
    );
  }


  private handleError<T> (operation = 'operation',  message: string, result?: T ) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(message);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
