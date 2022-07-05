import {
  BaseEntity, Column, Entity, PrimaryColumn} from 'typeorm';

@Entity('VIN')
export class VINEntity extends BaseEntity {
  public static readonly COLUMN_ID: string = 'id';

  constructor(id: string, year: number, make: string, model: string) {
    super();
    this.id = id;
    this.year = year;
    this.make = make;
    this.model = model;
  }

  @PrimaryColumn()
  readonly id: string;

  @Column()
  readonly year: number;

  @Column()
  readonly make: string;

  @Column()
  readonly model: string;
}