import {
  BaseEntity, Column, Entity, PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { RegistrationEntity } from './RegistrationEntity';
import { ColorEntity } from './ColorEntity';
import { VINEntity } from './VINEntity';

@Entity('Car')
export class CarEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
  readonly id: number;

    @Column({
      length: 7
    })
    readonly licensePlateNumber: string;

    @OneToOne(() => RegistrationEntity, {
      nullable: false,
      cascade: true,
      eager: true,
    })
    @JoinColumn({
      referencedColumnName: RegistrationEntity.COLUMN_NUMBER
    })
    readonly registration: RegistrationEntity;

    @OneToOne(() => VINEntity, {
      nullable: false,
      cascade: true,
      eager: true,
    })
    @JoinColumn({
      referencedColumnName: VINEntity.COLUMN_ID
    })
      vin: VINEntity;

    @Column()
    readonly price: number;

    @Column()
    readonly mileage: number;

    @Column()
    readonly description: string;

    @ManyToOne(() => ColorEntity, color => color.id, {
      nullable: false,
      eager: true,
    })
    @JoinColumn({
      referencedColumnName: ColorEntity.COLUMN_ID
    })
    readonly color: ColorEntity;
}
