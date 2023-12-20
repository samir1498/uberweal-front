import { expect, it } from "vitest";
import { Rider } from "../domain/entities/Rider";
import { RideRepositoryStub } from "../domain/repositories/stubs/RideRepositoryStub";
import { BookRideUseCase } from "./bookRideUseCase";

it("should book a ride", async () => {
  // Arrange
  const repository = new RideRepositoryStub();
  const bookRideUseCase = new BookRideUseCase(repository);
  const rider: Rider = {
    id: 1,
    name: "rider",
  };
  const startLocation = {
    name: "Paris",
  };
  const endLocation = {
    name: "Paris",
  };
  // Act
  const rideId = await bookRideUseCase.bookRide(
    rider,
    startLocation,
    endLocation
  );

  // Assert
  expect(rideId).toBe(1);
});


it("should list past rides", async () => {
  // Arrange
  const repository = new RideRepositoryStub();
  const bookRideUseCase = new BookRideUseCase(repository);
  const rider: Rider = {
    id: 1,
    name: "rider",
  };

  // Act
  const pastRides = await bookRideUseCase.listPastRides(rider.id);

  // Assert
  expect(pastRides.length).toBe(1);
});
