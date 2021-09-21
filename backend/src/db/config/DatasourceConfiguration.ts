import { ConnectionOptions } from "typeorm";
import { Entities } from "../../domain/entities";


const config : ConnectionOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "password",
    database: process.env.POSTGRES_DB || "postgres",
    entities: [...Entities],
    synchronize: true, 
};

export default config;