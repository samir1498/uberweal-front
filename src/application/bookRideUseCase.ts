// application/BookRideUseCase.ts

import { RideRepository } from "../domain/repositories/RideRepository";
import { Ride, RideStatus, Location } from "../domain/entities/Ride";
import { Rider } from "../domain/entities/Rider";

export class BookRideUseCase {
  private rideRepository: RideRepository;

  constructor(rideRepository: RideRepository) {
    this.rideRepository = rideRepository;
  }

  async bookRide(
    rider: Rider,
    startLocation: Location,
    endLocation: Location
  ): Promise<number> {

    const ride: Omit<Ride, "id"> = {
      rider: rider,
      status: RideStatus.IN_PROGRESS,
      startLocation,
      endLocation,
    };

    const rideId: number = await this.rideRepository.book(ride);


    return rideId;
  }

  async listPastRides(riderId: number){
    return this.rideRepository.listPastRides(riderId)
  }
}
