import * as jwt from "jsonwebtoken";
import { Service } from "typedi";
import { User } from "../../domain/entities/User";

@Service()
export class JWTService {

    public generateToken(user: User): string {
        try {
            const tokenData: TokenDataProp = {
                email: user.email,
                roles: user.roles.map(role => {
                    return {
                        name: role.name,
                        description: role.description,
                    }
                })
            }
            const token = jwt.sign(
                tokenData,
                "FIXME JSON TOKEN SECRET",
                {
                    expiresIn: "2h"
                }
            );

            return token;
        } catch (e) {
            console.log(e.message);
            throw new Error("System cannot complete your request. Failed to generate a token.");
        }
    }

    public decodeToken(token: string): string {
        try {
            const data = jwt.verify(token, "FIXME JSON TOKEN SECRET") as TokenDataProp;
            return data.email;
        } catch (e) {
            console.log(e.message);
            throw new Error("System cannot complete your request. Token verification failed.");
        }
    }
}

interface TokenDataProp {
    email: string,
    roles: RoleProp[]
}

interface RoleProp {
    name: string,
    description: string
}