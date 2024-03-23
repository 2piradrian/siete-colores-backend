import { Router } from "express";

export class ProductRoutes {
    static get routes(): Router {
        const router = Router()

        router.get("/get-all")
        router.post("/create")
        router.put("/update")
        router.delete("/delete")

        return router
    }
}