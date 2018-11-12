import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {EventModel} from '../models/eventModel';
import {Observable, of} from 'rxjs';
import {MessageService} from '../../common/services/message.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class EventModelService {

  private urlEventModel = 'eventModel/';
  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getEventModels(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(this.urlEventModel, this.httpHeaders).pipe(
      catchError(this.handleError<EventModel[]>('getHeroes', ''))
    );
  }

  createEventModel(eventModel: EventModel): Observable<EventModel> {
    return this.http.post<EventModel>(this.urlEventModel, JSON.stringify(eventModel), this.httpHeaders).pipe(
      catchError(this.handleError<EventModel>('getHeroes', ''))
    );
  }

  updateEventModel(eventModel: EventModel): Observable<EventModel> {
    return this.http.put<EventModel>(this.urlEventModel, JSON.stringify(eventModel), this.httpHeaders).pipe(
      catchError(this.handleError<EventModel>('getHeroes', ''))
    );
  }

  deleteEventModel(eventModel: EventModel): Observable<EventModel[]> {
    return this.http.delete<EventModel[]>(this.urlEventModel + '' + eventModel._id, this.httpHeaders).pipe(
      catchError(this.handleError<EventModel[]>('getHeroes', ''))
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
    this.messageService.add(`HeroService: ${message}`);
  }
}
