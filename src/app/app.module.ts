import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectionListComponent } from './selection/selection-list/selection-list.component';

import {RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import { SelectionDisplayComponent } from './selection/selection-display/selection-display.component'

@NgModule({
  declarations: [
    AppComponent,
    SelectionListComponent,
    SelectionDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',outlet:'left',component:SelectionListComponent},
      {path:`service/:name`, outlet:'right', component:SelectionDisplayComponent}
    ], { enableTracing: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
