import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs/Observable'

import {ILocation} from '../models/location';

@Injectable()
export class LocationService {

  constructor(private _http:HttpClient) { 
    
  }

  getLocation(url:string): Observable<ILocation> {
    return this._http.get<ILocation>(url);
  }
}
