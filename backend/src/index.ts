import "reflect-metadata";
import { createConnection, useContainer } from "typeorm";
import { Container } from "typeorm-typedi-extensions";
import { createExpressServer } from "routing-controllers";
import { AuthController } from "./controllers/AuthController";
import dataSourceConfiguration from './db/config/DatasourceConfiguration';


useContainer(Container);

createConnection(dataSourceConfiguration).then(() => {
    const app = createExpressServer({
        controllers: [AuthController],
    });

    const port = process.env.PORT || 8080;
    
    app.listen(port, () => {
        console.log("The server started.");
    })
});
