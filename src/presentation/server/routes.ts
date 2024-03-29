import { Router } from "express";
import { ProductRoutes } from "../app/product/routes";

export class AppRouter {
    static get routes(): Router {
        const router = Router();

        router.use('/api/products', ProductRoutes.routes)

        return router;
    }
}