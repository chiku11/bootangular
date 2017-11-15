import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from '@angular/router'
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-selection-display',
  templateUrl: './selection-display.component.html',
  styleUrls: ['./selection-display.component.css'],
  providers: [LocationService]
})
export class SelectionDisplayComponent implements OnInit {

  private name:string='';
  private uri:string='';
  private data:any;

  constructor(private _route:ActivatedRoute, private _router:Router, private _locationService:LocationService) {
    console.log(`${this._route.snapshot.paramMap.get('name')}`);
    this._route.paramMap.subscribe(paramMap => {
      console.log(`the data: ${paramMap.get('name')} ${paramMap.get('uri')}`);
      this.name=paramMap.get('name');
      this.uri = paramMap.get(`uri`)
      switch(this.name) {
        case "location":
          this.getLocation(this.uri)
          break;

      }
    })
    
   }

   getLocation(uri:string){
    this._locationService.getLocation(uri).subscribe(locationdata=>{
      this.data = locationdata;
    })
   }


  ngOnInit() {
    this.name = this._route.snapshot.paramMap.get('name');
  }
}
