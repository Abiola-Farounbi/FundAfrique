import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@Service()
@EntityRepository(User)
export class UserRepository extends Repository<User> {

    public findAll() {
        return this.find({});
    }

    public findByEmail(email: string){
        return this.findOne({where: {email: email}});
    }
}