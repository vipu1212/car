export class VIN {
  readonly id: string;
  year: number;
  make: string;
  model: string;

  constructor(id: string) {
    this.id = id;
  }
}
