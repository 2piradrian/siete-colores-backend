import { ProductEntity, ProductRepository } from "../../domain";
import { MongoProductDataSource } from "../data-source/mongo-product";

export class ProductRepository_I implements ProductRepository {
    private dataSource: MongoProductDataSource;

    constructor() {
        this.dataSource = new MongoProductDataSource();
    }

    public getAll(): Promise<ProductEntity[]> {
        return this.dataSource.getAll();
    }

    public getByCode(code: string): Promise<ProductEntity | undefined> {
        return this.dataSource.getByCode(code);
    }

    public getBySeries(series: string): Promise<ProductEntity[] | undefined> {
        return this.dataSource.getBySeries(series);
    }

    public create(product: ProductEntity): Promise<ProductEntity> {
        return this.dataSource.create(product);
    }

    public update(product: ProductEntity): Promise<ProductEntity> {
        return this.dataSource.update(product);
    }

    public updateList(productList: ProductEntity[]): Promise<ProductEntity[]> {
        return this.dataSource.updateList(productList);
    }

    public delete(code: string): Promise<void> {
        return this.dataSource.delete(code);
    }

}