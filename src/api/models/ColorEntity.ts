import {
  BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('Color')
export class ColorEntity extends BaseEntity {

  public static readonly COLUMN_ID: string = 'id';

    @PrimaryGeneratedColumn()
  readonly id: number;

    @Column()
    readonly name: string;

    @Column()
    readonly imageUrl: string;
}
