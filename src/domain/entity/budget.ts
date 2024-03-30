import { BudgetProductEntity } from "./budget-product";

export class BudgetEntity {
    private constructor(
        public id: string,
        public products: BudgetProductEntity[],
        public client: string,
        public total: number,
        public date: Date,
    ) {}

    static fromObject(object: {[key: string]: any}): BudgetEntity {
        const { _id, id, products, client, date, total } = object;

        return new BudgetEntity(
            _id || id,
            products,
            client,
            total,
            date,
        );
    }
}