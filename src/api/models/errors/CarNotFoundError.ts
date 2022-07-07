export class CarNotFounddError extends Error {
  public readonly name: string = 'CarNotFounddError';
  constructor(carId: number) {
    super(`Car with id ${carId} not found`);
  }
}
