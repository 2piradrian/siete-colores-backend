import { ProductEntity } from "../entity/product";

export abstract class ProductRepository {
    public abstract getAll(): Promise<ProductEntity[]>
    public abstract getByCode(code: string): Promise<ProductEntity | undefined>
    public abstract create(product: ProductEntity): Promise<ProductEntity>
    public abstract update(product: ProductEntity): Promise<ProductEntity>
    public abstract delete(code: string): Promise<void>
}