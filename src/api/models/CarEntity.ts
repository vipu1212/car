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
    readonly id: string;

    @Column({
        length: 7
    })
    readonly  licensePlateNumber: string;

    @OneToOne(() => RegistrationEntity, {
        nullable: false,
        cascade: true,
        eager: true,
    })
    @JoinColumn({
        referencedColumnName: RegistrationEntity.COLUMN_NUMBER
    })
    readonly registration: RegistrationEntity

    @Column()
    readonly vin: string;

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
    readonly color: ColorEntity
}