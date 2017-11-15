import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-selection-display',
  templateUrl: './selection-display.component.html',
  styleUrls: ['./selection-display.component.css']
})
export class SelectionDisplayComponent implements OnInit {

  private name:string='';

  constructor(private _route:ActivatedRoute, private _router:Router) {
    console.log(`${this._route.snapshot.paramMap.get('name')}`);
    this._route.paramMap.subscribe(paramMap => {
      console.log(`the data: ${paramMap.get('name')}`);
      this.name=paramMap.get('name');
    })
    
   }


  ngOnInit() {
    this.name = this._route.snapshot.paramMap.get('name');
  }
}
