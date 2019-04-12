import { Injectable } from '@angular/core';
import { IFlight } from './interfaces';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }

  /**
   * Gets flight data from JSON source
   * 
   * @returns IFlight Observable. Can be subscribed to get records
   */
  getFlights() : Observable<IFlight[]> {
    return this.http.get<IFlight[]>('./assets/data.json');
  }
}
