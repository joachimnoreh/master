import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Consigne} from '../models/consigne';
import {Observable, of} from 'rxjs';
import {MessageService} from '../../common/services/message.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ConsigneService {

  private urlConsigne = 'consignes/';
  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getConsignes(): Observable<Consigne[]> {
    return this.http.get<Consigne[]>(this.urlConsigne, this.httpHeaders).pipe(
      catchError(this.handleError<Consigne[]>('getHeroes', ''))
    );
  }

  createConsigne(consigne: Consigne): Observable<Consigne> {
    return this.http.post<Consigne>(this.urlConsigne, JSON.stringify(consigne), this.httpHeaders).pipe(
      catchError(this.handleError<Consigne>('getHeroes', ''))
    );
  }

  updateConsigne(consigne: Consigne): Observable<Consigne> {
    return this.http.put<Consigne>(this.urlConsigne, JSON.stringify(consigne), this.httpHeaders).pipe(
      catchError(this.handleError<Consigne>('getHeroes', ''))
    );
  }

  deleteConsigne(consigne: Consigne): Observable<Consigne[]> {
    return this.http.delete<Consigne[]>(this.urlConsigne + '' + consigne._id, this.httpHeaders).pipe(
      catchError(this.handleError<Consigne[]>('getHeroes', ''))
    );
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
    this.messageService.add(`ConsigneService: ${message}`);
  }
}
