import {
    BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("Color")
export class ColorEntity extends BaseEntity {

    public static readonly COLUMN_ID: string = 'id';

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    imageUrl: string;
}