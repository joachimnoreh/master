import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {EventModel} from '../models/eventModel';

@Injectable()
export class EventModelService {

  private siteUrl = 'http://localhost:8090';
  private urlFindAll = '/findAllSite/';
  private urlGetPlace = '/findAllSite/';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getAllEvenementModele() {
    return this.http.get(this.siteUrl + this.urlFindAll);
  }


  private handleError(error: any): Promise<any> {
    console.error('error', error);
    return Promise.reject(error.message || error);
  }

}
