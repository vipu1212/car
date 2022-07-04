import {
    BaseEntity, Column, Entity, PrimaryColumn} from "typeorm";

@Entity("Registration")
export class RegistrationsEntity extends BaseEntity {

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