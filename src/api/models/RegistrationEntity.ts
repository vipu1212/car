import {
    BaseEntity, Column, Entity, PrimaryColumn} from "typeorm";

@Entity("Registration")
export class RegistrationEntity extends BaseEntity {

    public static readonly COLUMN_NUMBER: string = 'number';

    @PrimaryColumn()
    readonly number: number;

    @Column({
        length: 2,
    })
    readonly stateCode: string;

    @Column()
    readonly expiration: Date;

    @Column()
    readonly registeredName: string;
}