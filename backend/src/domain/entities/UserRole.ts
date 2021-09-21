import { Entity, PrimaryColumn } from "typeorm";

@Entity("user_role")
export class UserRole {

    @PrimaryColumn()
    userId: number;

    @PrimaryColumn()
    roleName: string;
}