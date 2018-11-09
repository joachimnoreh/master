import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {EventModel} from '../models/eventModel';
import {Observable} from 'rxjs';

@Injectable()
export class EventModelService {

  private urlEventModel = 'eventModel/';
  private httpHeaders = {
    headers : new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getEventModels(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(this.urlEventModel, this.httpHeaders);
  }

  createEventModel(eventModel: EventModel): Observable<EventModel> {
    return this.http.post<EventModel>(this.urlEventModel, JSON.stringify(eventModel), this.httpHeaders);
  }
  updateEventModel(eventModel: EventModel): Observable<EventModel> {
    return this.http.put<EventModel>(this.urlEventModel, JSON.stringify(eventModel), this.httpHeaders);
  }

  private handleError(error: any): Promise<any> {
    console.error('error', error);
    return Promise.reject(error.message || error);
  }

}
