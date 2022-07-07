export class VIN {
  readonly id: string;
  year: number;
  make: string;
  model: string;

  constructor(id: string) {
    this.id = id;
  }

  hasIncompleteInfo() {
    return this.year == null || this.make == null || this.model == null;
  }
}
