import {
    BaseEntity, Column, Entity, PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    ManyToOne,
} from "typeorm";
import { RegistrationEntity } from "./RegistrationEntity";
import { ColorEntity } from "./ColorEntity";

@Entity("Car")
export class CarEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        length: 7
    })
    licensePlateNumber: string;

    @OneToOne(() => RegistrationEntity, {
        nullable: false,
        cascade: true,
        eager: true,
    })
    @JoinColumn({
        referencedColumnName: RegistrationEntity.COLUMN_NUMBER
    })
    registration: RegistrationEntity

    @Column()
    vin: string;

    @Column()
    price: number;

    @Column()
    mileage: number;

    @Column()
    description: string;

    @ManyToOne(() => ColorEntity, color => color.id, {
        nullable: false,
        eager: true,
    })
    @JoinColumn({
        referencedColumnName: ColorEntity.COLUMN_ID
    })
    color: ColorEntity
}