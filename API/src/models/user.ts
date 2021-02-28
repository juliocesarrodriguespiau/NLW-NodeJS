import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
class User {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    created_at: Date
}

export { User }