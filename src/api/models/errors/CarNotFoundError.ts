export class CarNotFounddError extends Error {
  public readonly name: string = 'CarNotFounddError';
  constructor(carId: string) {
    super(`Car with id ${carId} not found`);
  }
}