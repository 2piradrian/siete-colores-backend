export class BudgetProductEntity {
    private constructor(
        public id: string,
        public code: string, // we need just the code
        public name: string, // and the name for the reference
        public quantity: number,
        public total: number,
    ){}

    static fromObject(object: {[key: string]: any}): BudgetProductEntity {
        const { _id, id, code, name, quantity, total } = object;

        return new BudgetProductEntity(
            _id || id,
            code,
            name,
            quantity,
            total
        );
    }
}