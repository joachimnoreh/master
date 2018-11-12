import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Site} from '../models/site';

import {Observable, of} from 'rxjs';
import {MessageService} from '../../common/services/message.service';

@Injectable()
export class SiteService {

  private urlSite = 'sites/';
  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  site: Site;

  constructor(private http: HttpClient, private messageService: MessageService) {

  }

  getSite(): Observable<Site> {
   return  this.http.get<Site>(this.urlSite, this.httpHeaders);
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
    this.messageService.add(`HeroService: ${message}`);
  }
}
