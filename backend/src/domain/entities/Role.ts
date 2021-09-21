import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Role {

    @PrimaryColumn()
    name: string;

    @Column()
    description: string;
}