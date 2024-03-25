import { CreateProductDTO, DeleteProductDTO, GetProductByCodeDTO, ProductEntity, UpdateProductDTO } from "../../../domain";
import { ProductRepository_I } from "../../../infrastructure";

export class ProductService {
    constructor(
        private readonly repository = new ProductRepository_I()
    ){}

    public async getAll() {
        try {
            return await this.repository.getAll();
        }
        catch(error){
            throw error
        }
    }

    public async getByCode(dto: GetProductByCodeDTO) {
        try {
            return await this.repository.getByCode(dto.code);
        }
        catch(error){
            throw error
        }
    }

    public async create(dto: CreateProductDTO) {
        try {
            const product = ProductEntity.fromObject(dto);

            return await this.repository.create(product);
        }
        catch(error){
            throw error
        }
    }

    public async update(dto: UpdateProductDTO) {
        try {
            const product = ProductEntity.fromObject(dto);

            return await this.repository.update(product);
        }
        catch(error){
            throw error
        }
    }

    public async updatePrices() {} // TODO: Implement this method and its dto

    public async delete(dto: DeleteProductDTO) {
        try {
            return await this.repository.delete(dto.code);
        }
        catch(error){
            throw error
        }
    }

}