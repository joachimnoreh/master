import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Place} from '../models/place';
import {Observable} from 'rxjs';
import {GlobalService} from '../../common/services/global.service';
import {User} from '../../user/models/user';
import {SiteService} from './site.service';

@Injectable()
export class PlaceService {

  private placeUrl = 'places/';
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private siteService: SiteService) {
  }

  update(place: Place): Observable<Place> {
    return this.http.put<Place>(this.placeUrl, JSON.stringify(place),  this.httpHeaders );
  }

  createPlace(place: Place): Observable<Place> {
    return this.http.post<Place>(this.placeUrl, JSON.stringify(place), this.httpHeaders);
  }

  private handleError(error: any): Promise<any> {
    console.error('error', error);
    return Promise.reject(error.message || error);
  }
}
