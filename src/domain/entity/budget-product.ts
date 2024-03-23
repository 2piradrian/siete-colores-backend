import { ProductEntity } from "./product";

export class BudgetProductEntity {
    private constructor(
        private readonly id: string,
        private readonly product: ProductEntity,
        private readonly quantity: number,
        private readonly total: number,
    ){}

    static fromObject(object: {[key: string]: any}): BudgetProductEntity {
        const { _id, id, product, quantity, total } = object;

        return new BudgetProductEntity(
            _id || id,
            product,
            quantity,
            total
        );
    }
}