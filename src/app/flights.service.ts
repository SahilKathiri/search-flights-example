import { Injectable } from '@angular/core';
import { IFlight } from './interfaces';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }

  getFlights() : Observable<IFlight[]> {
    return this.http.get<IFlight[]>('./assets/data.json');
  }
}
