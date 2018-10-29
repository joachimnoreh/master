import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Place} from '../models/place';
import {Observable} from 'rxjs';

@Injectable()
export class PlaceService {

  private findPlaceUrl = '/mci/findPlace/';
  private updatePlaceUrl = '/mci/updatePlace/';
  private createPlaceUrl = '/mci/createPlace/';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getPlace(placeId: string): Promise<Place> {
    return null;

  }

  update(place: Place): Observable<Place> {
    const url = this.updatePlaceUrl;
    return this.http.post<Place>(url, JSON.stringify(place), {HttpHeaders: this.headers});

  }

  createPlace(place: Place): Observable<Place> {
    const url = this.createPlaceUrl;
    // return this.http.post(url,JSON.stringify(place),)
    return this.http.post<Place>(url, 'JSON.stringify(place)', {HttpHeaders: this.headers});


  }

  private handleError(error: any): Promise<any> {
    console.error('error', error);
    return Promise.reject(error.message || error);
  }
}
