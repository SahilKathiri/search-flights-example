import { Component, OnInit, Input, KeyValueChanges, KeyValueDiffer, KeyValueDiffers } from '@angular/core';
import { FlightsService } from '../flights.service';
import { IFlight, IFilter } from '../interfaces';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
  providers: [FlightsService],
})
export class FlightListComponent implements OnInit {
  @Input() filter: IFilter;
  private filterDiffer: KeyValueDiffer<string, any>;

  private flights: IFlight[];
  filteredDepartureFlights: IFlight[];
  filteredArrivalFlights: IFlight[];

  showFlightInfo: boolean;

  constructor(private flightService: FlightsService, private differs: KeyValueDiffers) { }

  ngOnInit() {
    this.flightService.getFlights().subscribe((flightList) => { 
      this.flights =  Object.assign([], flightList);
      this.filteredDepartureFlights = Object.assign([], flightList);
      this.filteredArrivalFlights = Object.assign([], flightList);
    });
    this.filterDiffer = this.differs.find(this.filter).create();
    
    this.filterFlights();
  }

  filterChanged(changes: KeyValueChanges<string, any>) {
    // Validate 
    const dateMismatch = this.filter.arrivalDate < this.filter.departureDate;
    const sameDestination = this.filter.origin == this.filter.destination;
    const noPassengers  = this.filter.pax > 0;
    
    // If not valid, return with no results
    if (dateMismatch || sameDestination || noPassengers) {
      this.showFlightInfo = false;
      return;
    }

    // Else show flights
    this.filterFlights();
  }

  ngDoCheck(): void {
      const changes = this.filterDiffer.diff(this.filter);
      if (changes) {
        this.filterChanged(changes); 
      }
  }

  filterFlights(): void {
    this.filteredDepartureFlights = this.flights.filter(obj => {
      const originMet = this.filter.origin != null && this.filter.origin.toLowerCase() == obj.origin.toLowerCase();
      const destinationMet = this.filter.destination != null && this.filter.destination.toLowerCase() == obj.destination.toLowerCase();
      const departureDateMet = this.filter.departureDate != null && obj.operationalDays.includes(this.filter.departureDate.getDay()+1);

      if (this.filter.type != null && originMet && destinationMet && departureDateMet)  {
        return true;
      } else {
        return false;
      }
    });
    
    this.filteredArrivalFlights = this.flights.filter(obj => {
      const originMet = this.filter.origin != null && this.filter.origin.toLowerCase() == obj.destination.toLowerCase();
      const destinationMet = this.filter.destination != null && this.filter.destination.toLowerCase() == obj.origin.toLowerCase();
      const arrivalDateMet = this.filter.arrivalDate != null && obj.operationalDays.includes(this.filter.arrivalDate.getDay()+1);
      
      if (this.filter.type == 'return' && originMet && destinationMet && arrivalDateMet)  {
        return true;
      } else {
        return false;
      }
    });
    
    if (this.filter.type == 'oneWay' && this.filteredDepartureFlights.length > 0) {
      this.showFlightInfo = true;
    } else if (this.filter.type == 'return' && this.filteredArrivalFlights.length > 0) {
      this.showFlightInfo = true;
    } else {
      this.showFlightInfo = false;
    }
  }

}
