import { CreateProductDTO, DeleteProductDTO, GetProductByCodeDTO, UpdateProductDTO } from "../../../domain";

export class ProductService {
    constructor(){}

    public async getAll() {}

    public async getByCode(dto: GetProductByCodeDTO) {}

    public async create(dto: CreateProductDTO) {}

    public async update(dto: UpdateProductDTO) {}

    public async delete(dto: DeleteProductDTO) {}

}