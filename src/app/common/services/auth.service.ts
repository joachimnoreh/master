import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from '../../user/models/user';
import {catchError} from 'rxjs/operators';
import {MessageService} from './message.service';
import {LoginObject} from '../model/loginObject';


@Injectable(({
  providedIn: 'root'
}))
export class AuthService {

  urlAuth = 'authenticate/';
  currentUser: User;
  token: string;
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  login(user: User): Observable<LoginObject> {
    const observable = this.http.get<LoginObject>(this.urlAuth.concat(user.email), {headers: this.headers}).pipe(
      catchError(this.handleError<LoginObject>('Login', '')));
    observable.subscribe((retour: LoginObject) => {
      this.currentUser = retour.user;
      this.token = retour.token;
    });
    return observable;
  }

  checkToken(): Observable<{success: string}> {
    return this.http.get<{success: string}>(this.urlAuth + 'checkToken/', {headers: this.headers}).pipe(
      catchError(this.handleError('checkToken', '')));

  }

  logout() {
    this.currentUser = null;
    this.token = null;

  }


  private handleError<T>(operation = 'operation', message: string, result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(message);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`Auth service: ${message}`);
  }
}
