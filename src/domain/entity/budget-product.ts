export class BudgetProductEntity {
    private constructor(
        public code: string, // we need just the code
        public name: string, // and the name for the reference
        public quantity: number,
        public total: number,
    ){}

    static fromObject(object: {[key: string]: any}): BudgetProductEntity {
        const { code, name, quantity, total } = object;

        return new BudgetProductEntity(
            code,
            name,
            quantity,
            total
        );
    }
}