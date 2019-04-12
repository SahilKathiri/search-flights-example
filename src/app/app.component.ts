import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { IFilter } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  filter: IFilter;
  
  constructor() {
    this.filter = {
      arrivalDate: null,
      departureDate: null,
      destination: null,
      origin: null,
      pax: 1,
      type: 'oneWay'
    }
  }

  ngOnInit(): void {
  }
}
