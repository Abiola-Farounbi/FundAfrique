import * as bcrypt from "bcrypt";
import { Service } from "typedi";

@Service()
export class PasswordEnconder {

    public async encode (clearTextPassword: string): Promise<string> {
        try{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(clearTextPassword, salt);
            return hashedPassword;
        } catch(e){
            console.log(e.getMessage());
            throw new Error("System cannot complete your request. Password hashing failed.");
        }
    }

    public async matches (password: string, hashedPassword: string): Promise<boolean> {
        try{
            const matched = await bcrypt.compare(password, hashedPassword);
            return matched;
        } catch(e){
            console.log(e.getMessage());
            throw new Error("System cannot complete your request. Password verification failed.");
        }
    }
}