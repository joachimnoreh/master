import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {EventModel} from '../models/eventModel';

@Injectable()
export class EventModelService {

  private urlFindAll = '/findAllEventModel/';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getAllEvenementModel() {
    return this.http.get(this.urlFindAll);
  }


  private handleError(error: any): Promise<any> {
    console.error('error', error);
    return Promise.reject(error.message || error);
  }

}
