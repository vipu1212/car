export class NoEntityInput extends Error {
  public readonly name: string = 'NoEntityInput';
  constructor() {
    super('Entity body is null');
  }
}
