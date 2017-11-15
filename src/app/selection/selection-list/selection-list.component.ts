import { Component, OnInit } from '@angular/core';
import {SelectionService} from '../../services/selection.service';

import {ISelection} from '../../models/iselection'


@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.css']
})
export class SelectionListComponent implements OnInit {

  private  selectionList: ISelection[];
  constructor(private _selectionService:SelectionService) { 

  }

  ngOnInit() {
    this._selectionService.getSelectionList().subscribe(data=>{
      this.selectionList=data;
      console.log(data)
    });
  }

}
