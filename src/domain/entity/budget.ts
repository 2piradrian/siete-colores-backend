import { BudgetProductEntity } from "./budget-product";

export class BudgetEntity {
    private constructor(
        private readonly id: string,
        private readonly products: BudgetProductEntity[],
        private readonly client: string,
        private readonly date: Date,
        private readonly total: number,
    ) {}

    static fromObject(object: {[key: string]: any}): BudgetEntity {
        const { _id, id, products, client, date, total } = object;

        return new BudgetEntity(
            _id || id,
            products,
            client,
            date,
            total
        );
    }
}