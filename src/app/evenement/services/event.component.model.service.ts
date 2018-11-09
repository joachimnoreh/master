import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {EventComponentModel} from '../models/eventComponentModel';
import {Observable} from 'rxjs';

@Injectable()
export class EventComponentModelService {

  private urlEventComponentModel = 'eventComponentModels/';
  private httpHeaders = {
    headers : new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
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

  private handleError(error: any) {
    console.error('error', error);

  }

}
