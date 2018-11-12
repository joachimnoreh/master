import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {EventComponentModel} from '../models/eventComponentModel';
import {Observable, of} from 'rxjs';
import {SiteService} from '../../places/services/site.service';
import {MessageService} from '../../common/services/message.service';

@Injectable()
export class EventComponentModelService {

  private urlEventComponentModel = 'eventComponentModels/';
  private httpHeaders = {
    headers : new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getEventComponentModels(): Observable<EventComponentModel[]> {
    return this.http.get<EventComponentModel[]>(this.urlEventComponentModel, this.httpHeaders);
  }

  createEventComponentModel(componentModel: EventComponentModel): Observable<EventComponentModel> {
    return this.http.post<EventComponentModel>(this.urlEventComponentModel, JSON.stringify(componentModel), this.httpHeaders);
  }
  updateEventComponentModel(componentModel: EventComponentModel): Observable<EventComponentModel> {
    return this.http.put<EventComponentModel>(this.urlEventComponentModel, JSON.stringify(componentModel), this.httpHeaders);
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
