export class RegistrationExpiredError extends Error {
  public readonly name: string = 'RegistrationExpiredError';
  constructor(expirationDate: Date) {
    super(`Registration expired on ${expirationDate}`);
  }
}