import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Place} from '../models/place';
import {Observable} from 'rxjs';
import {GlobalService} from '../../common/services/global.service';
import {User} from '../../user/models/user';
import {SiteService} from './site.service';

@Injectable()
export class PlaceService {

  private findPlaceUrl = 'findPlace/';
  private updatePlaceUrl = 'updatePlace/';
  private createPlaceUrl = 'createPlace/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private siteService: SiteService) {
  }

  update(place: Place): Observable<Place> {
    const url = this.updatePlaceUrl;
    return this.http.post<Place>(url, JSON.stringify(place),  this.httpOptions );
  }

  createPlace(place: Place): Observable<Place> {
    const url = this.createPlaceUrl;
    return this.http.post<Place>(url, JSON.stringify(place), this.httpOptions);
  }

  private handleError(error: any): Promise<any> {
    console.error('error', error);
    return Promise.reject(error.message || error);
  }
}
