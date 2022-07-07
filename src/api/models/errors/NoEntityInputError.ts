export class NoEntityInputError extends Error {
  public readonly name: string = 'NoEntityInputError';
  constructor() {
    super('Entity body is null');
  }
}
