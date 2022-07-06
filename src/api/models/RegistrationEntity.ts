import {
  BaseEntity, Column, Entity, PrimaryColumn} from 'typeorm';

@Entity('Registration')
export class RegistrationEntity extends BaseEntity {

  public static COLUMN_NUMBER = 'number';

    @PrimaryColumn()
      number: number;

    @Column({
      length: 2,
    })
      stateCode: string;

    @Column()
      expiration: Date;

    @Column()
      registeredName: string;
}
