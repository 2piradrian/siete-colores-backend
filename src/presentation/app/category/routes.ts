import { Router } from 'express';
import { SecretValidator } from '../../middleware/secret';

export class CategoryRoutes {
    static get routes(): Router {

        const router = Router();

        router.get("/get-all");

        router.post("/create", [SecretValidator.validate]);

        router.put("/delete", [SecretValidator.validate]);
        
        return router;
    }
}