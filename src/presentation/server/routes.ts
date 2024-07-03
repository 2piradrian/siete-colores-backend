import { Router } from "express";
import { ProductRoutes } from "../app/product/routes";
import { BudgetRoutes } from "../app/budget/routes";
import { StatisticsRoutes } from "../app/statistics/router";
import { CategoryRoutes } from "../app/category/routes";

export class AppRouter {
    static get routes(): Router {
        const router = Router();

        router.use('/api/products', ProductRoutes.routes)
        router.use('/api/budgets', BudgetRoutes.routes)
        router.use('/api/statistics', StatisticsRoutes.routes)
        router.use('/api/categories', CategoryRoutes.routes)

        return router;
    }
}