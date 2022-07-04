import {
    BaseEntity, Column, Entity, PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
} from "typeorm";
import { RegistrationsEntity } from "./RegistrationsEntity";
import { ColorsEntity } from "./ColorsEntity";

@Entity("Car")
export class CarsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        length: 7
    })
    licensePlateNumber: string;

    @OneToOne(() => RegistrationsEntity, {
        nullable: false,
        cascade: true,
        eager: true,
    })
    @JoinColumn({
        referencedColumnName: 'number'
    })
    registration: RegistrationsEntity

    @Column()
    vin: string;

    @Column()
    price: number;

    @Column()
    mileage: number;

    @Column()
    description: string;

    @OneToOne(() => ColorsEntity, color => color.id, {
        nullable: false,
        eager: true,
    })
    @JoinColumn({
        referencedColumnName: 'id'
    })
    color: ColorsEntity
}