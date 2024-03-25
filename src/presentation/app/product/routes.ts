import { Router } from "express";
import { ProductController } from "./controller";
import { ProductService } from "./service";

export class ProductRoutes {
    static get routes(): Router {
                            
        const router = Router()
        const service = new ProductService()
        const controller = new ProductController(service)

        router.get("/get-all", controller.getAll)
        router.post("/create", controller.create)
        router.put("/update", controller.update)
        router.delete("/delete", controller.delete)

        return router
    }
}