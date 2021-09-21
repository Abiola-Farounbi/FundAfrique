import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Role } from "./Role";

@Entity("users")
@Unique(["email"])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    email: string;

    @Column()
    mobileNumber: string;

    @Column()
    password: string;

    @Column({nullable: true})
    profileImageUri: string;

    @ManyToMany(() => Role, { eager: true })
    @JoinTable({
        name: "user_role",
        joinColumn: {
            name: 'userId',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'roleName',
            referencedColumnName: 'name',
        }
    })
    roles: Role[];
}