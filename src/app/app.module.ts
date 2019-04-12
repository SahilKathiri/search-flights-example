import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FilterControlComponent } from './filter-control/filter-control.component';
import { FlightsService } from './flights.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterControlComponent,
    FlightDetailComponent,
    FlightListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [FlightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
