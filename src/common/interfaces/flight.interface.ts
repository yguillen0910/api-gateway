import { IPassenger } from "./passenger.interface";
import { IWeather } from "./weather.location";

export interface IFlight extends Document {
    _id?: string;
    pilot: string;
    airplane: string;
    destinationCity: string;
    flightDate: Date;
    passengers: IPassenger[];
    wheather: IWeather[];
}