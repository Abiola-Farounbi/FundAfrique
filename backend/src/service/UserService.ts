import { User } from "src/domain/entities/User";
import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { UserRepository } from "../domain/repositories/UserRepository";

@Service()
export class UserService {

    private userRepository: UserRepository;

    constructor(@InjectRepository() userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public findAll(): Promise<User[]> {
        return this.userRepository.findAll();
    }

    public findByEmail(email: string): Promise<User | undefined> {
        return this.userRepository.findByEmail(email);
    }

    public save(user: User): Promise<User> {
        return this.userRepository.save(user);
    }
}