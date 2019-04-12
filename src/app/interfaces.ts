export interface IFlight {
    airline: string;
    airlineCode: string;
    flightNumber: number;
    origin: string;
    availableSeats: number;
    destination: string;
    price: number;
    departure: Date;
    arrival: Date;
    duration: string;
    operationalDays: number[];
}

export interface IFilter {
    type: string;
    origin: string;
    destination: string;
    departureDate: Date;
    arrivalDate: Date;
    pax: number;
}