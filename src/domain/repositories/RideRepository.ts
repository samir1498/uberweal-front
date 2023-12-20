// domain/repositories/RideRepository.ts

import { Ride } from "../entities/Ride";

export interface RideRepository {
  book(ride: Omit<Ride, "id">): Promise<number>;
  listPastRides(riderId: number): Promise<Ride[]>;
}
