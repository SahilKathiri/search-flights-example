import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IFilter } from '../interfaces';

@Component({
  selector: 'app-filter-control',
  templateUrl: './filter-control.component.html',
  styleUrls: ['./filter-control.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterControlComponent implements OnInit {
  @Input() filter: IFilter;

  constructor() { }

  ngOnInit() {
  }

  /**
   * CHanges filter value on click of the buttons
   * @param type Type of filter
   */
  changeType(type: string) {
    this.filter.type = type;
    this.filter.departureDate = null;
    this.filter.arrivalDate = null;
  }

}
