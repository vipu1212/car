export class IncompleteVINInfoError extends Error {
  public readonly name: string = 'IncompleteVINInfoError';
  constructor(vinId: string) {
    super(`Incomplete info for ${vinId}`);
  }
}
