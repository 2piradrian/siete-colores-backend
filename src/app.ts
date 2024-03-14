import { env } from './config';
import { Server, AppRouter } from './presentation';

(async () => {
    main();
})();

async function main() {

    //const mongo = new MongoDatabase();
    //await mongo.connect();
    //
    //const postgres = new PostgreDatabase();
    //await postgres.connect();

    const server = new Server({
        port: env.PORT,
        routes: AppRouter.routes
    });

    server.start();
}