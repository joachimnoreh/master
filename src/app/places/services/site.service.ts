import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Site} from '../models/site';

import {Observable} from 'rxjs';

@Injectable()
export class SiteService {

  private urlSite = 'sites/';
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  getSite(): Observable<Site> {
    return this.http.get<Site>(this.urlSite, this.httpHeaders);
  }

  private handleError(error: any): Promise<any> {
    console.error('error', error);
    return Promise.reject(error.message || error);
  }

}
