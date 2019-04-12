import { Component, OnInit, Input } from '@angular/core';
import { IFlight, IFilter } from '../interfaces';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss']
})
export class FlightDetailComponent implements OnInit {
  @Input() flight: IFlight;

  constructor() { }

  ngOnInit() {
  }

}
