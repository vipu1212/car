import {
    BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("Color")
export class ColorsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;
}