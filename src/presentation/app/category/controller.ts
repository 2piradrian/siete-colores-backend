import { Request, Response } from "express";
import { ProductService } from "../product/service";
import { ErrorHandler } from "../../../domain";

export class CategoryController {
    constructor(
        private readonly productService: ProductService,
    ){}

    getAll = (req: Request, res: Response) => {
        this.productService.getAll()
        .then((products) => res.status(200).json(products))
        .catch(error => ErrorHandler.handle(error, res));
    }

    create = (req: Request, res: Response) => {}

    delete = (req: Request, res: Response) => {}
}