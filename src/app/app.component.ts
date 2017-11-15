import { Component } from '@angular/core';
import { SelectionService } from './services/selection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SelectionService]
})
export class AppComponent {
  title = 'app';
}
