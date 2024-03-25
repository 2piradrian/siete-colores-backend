import { ProductEntity } from "../../domain";
import { ProductDataSource } from "../../domain/data-source/product";

export class MongoProductDataSource implements ProductDataSource{
    public async getAll(): Promise<ProductEntity[]> {
        try {

        }
        catch(error){
            throw error
        }
        throw new Error("Method not implemented.");
    }
    public async getByCode(code: string): Promise<ProductEntity | undefined> {
        try {

        }
        catch(error){
            throw error
        }
        throw new Error("Method not implemented.");
    }
    public async create(product: ProductEntity): Promise<ProductEntity> {
        try {

        }
        catch(error){
            throw error
        }
        throw new Error("Method not implemented.");
    }
    public async update(product: ProductEntity): Promise<ProductEntity> {
        try {

        }
        catch(error){
            throw error
        }
        throw new Error("Method not implemented.");
    }
    public async delete(code: string): Promise<void> {
        try {

        }
        catch(error){
            throw error
        }
        throw new Error("Method not implemented.");
    }
}