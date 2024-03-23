import { Request, Response } from "express";
import { ProductService } from "./service";
import { ErrorHandler } from "../../../domain";

export class ProductController{
    constructor(
        private readonly productService: ProductService
    ){}

    getAll = (req: Request, res: Response) => {
        this.productService.getByCode()
        .then((products) => res.status(200).json(products))
        .catch(error => ErrorHandler.handle(error, res));
    }

    getByCode = (req: Request, res: Response) => {}

    create = (req: Request, res: Response) => {}

    update = (req: Request, res: Response) => {}

    delete = (req: Request, res: Response) => {}

}