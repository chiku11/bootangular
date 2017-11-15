import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs/Observable'

import {ISelection} from '../models/iselection'


@Injectable()
export class SelectionService {

  private selectionUri:string = `/apiMock/selection/selectionstree.json`;
  constructor(private _http:HttpClient) { 

  }

  getSelectionList(): Observable<ISelection[]> {
     return this._http.get<ISelection[]>(this.selectionUri);
  }


}
