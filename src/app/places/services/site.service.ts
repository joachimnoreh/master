import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Site} from '../models/site';

import {Observable} from 'rxjs';

@Injectable()
export class SiteService {

  private urlFindSite = 'findSite/';
  private urlGetPlace = 'findAllSite/';
  private _headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getSite(): Observable<Site> {
    return this.http.get<Site>(/*this.siteUrl + */this.urlFindSite);
  }

  private handleError(error: any): Promise<any> {
    console.error('error', error);
    return Promise.reject(error.message || error);
  }

}
