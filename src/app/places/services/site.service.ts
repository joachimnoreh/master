import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Site} from '../models/site';

import {Observable} from 'rxjs';

@Injectable()
export class SiteService {

  private urlFindAll = '/findAllSite/';
  private urlGetPlace = '/findAllSite/';
  private _headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getAllSite(): Observable<Site[]> {
    return this.http.get<Site[]>(/*this.siteUrl + */this.urlFindAll);
  }

  private handleError(error: any): Promise<any> {
    console.error('error', error);
    return Promise.reject(error.message || error);
  }

}
