// domain/entities/Ride.ts

import { Rider } from "./Rider";

export type Ride = {
  id: number;
  rider: Rider;
  status: RideStatus;
  startLocation: Location;
  endLocation: Location;
};

export enum RideStatus {
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export type Location = {
  //   latitude: number;
  //   longitude: number;
  name: string;
};
