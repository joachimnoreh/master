import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Place} from '../models/place';
import {Observable, of} from 'rxjs';


import {User} from '../../user/models/user';
import {SiteService} from './site.service';
import {MessageService} from '../../common/services/message.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class PlaceService {

  private placeUrl = 'places/';
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private siteService: SiteService, private messageService: MessageService) {
  }

  update(place: Place): Observable<Place> {
    return this.http.put<Place>(this.placeUrl, JSON.stringify(place),  this.httpHeaders ).pipe(
      catchError(this.handleError<Place>('getHeroes', '', ))
    );
  }

  createPlace(place: Place): Observable<Place> {
    return this.http.post<Place>(this.placeUrl, JSON.stringify(place), this.httpHeaders).pipe(
      catchError(this.handleError<Place>('getHeroes', '', ))
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
    this.messageService.add(`PlaceService: ${message}`);
  }
}
