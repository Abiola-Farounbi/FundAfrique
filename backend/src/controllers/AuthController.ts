import { Service } from "typedi";
import { User } from "../domain/entities/User";
import { UserService } from "../service/UserService";
import { Container } from "typeorm-typedi-extensions";
import { Body, Get, JsonController, Post } from "routing-controllers";
import { PasswordEnconder } from "../service/utils/PasswordEnconder";

@Service()
@JsonController()
export class AuthController {

    private userService: UserService;
    private passwordEnconder: PasswordEnconder;

    constructor() {
        this.userService = Container.get(UserService);
        this.passwordEnconder = Container.get(PasswordEnconder);
    }

    @Post("/register")
    public async register(@Body() user: User) {
        user.password = await this.passwordEnconder.encode(user.password);
        this.userService.save(user);
        return user;
    }

    @Get("")
    public hello() {
        return "Hello world";
    }

    @Get("/users")
    public async users(): Promise<User[]> {
        return await this.userService.findAll();
    }
}
