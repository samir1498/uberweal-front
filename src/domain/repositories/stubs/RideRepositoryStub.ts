// domain/repositories/stubs/RideRepositoryStub.ts

import { Ride, RideStatus } from "../../entities/Ride";
import { RideRepository } from "../RideRepository";

export class RideRepositoryStub implements RideRepository {
  private ridesArray: Ride[] = [
    {
      id: 1,
      rider: {
        id: 1,
        name: "rider1",
      },
      status: RideStatus.COMPLETED,
      startLocation: { name: "Outside Paris" },
      endLocation: { name: "Outiside Paris" },
    },
    {
      id: 2,
      rider: {
        id: 2,
        name: "rider2",
      },
      status: RideStatus.COMPLETED,
      startLocation: { name: "Paris" },
      endLocation: { name: "Outiside Paris" },
    },
  ];

  private nextId = 1;

  async book(ride: Ride): Promise<number> {
    const id = this.nextId++;
    this.ridesArray.push({ ...ride, id });
    return id;
  }

  async listPastRides(riderId: number): Promise<Ride[]> {
    const pastRides = this.ridesArray.filter(
      (ride) => ride.rider.id === riderId && ride.status === RideStatus.COMPLETED
    );
    return pastRides;
  }
}
