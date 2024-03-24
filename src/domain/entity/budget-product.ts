export class BudgetProductEntity {
    private constructor(
        private readonly id: string,
        private readonly code: string, // we need just the code
        private readonly name: string, // and the name for the reference
        private readonly quantity: number,
        private readonly total: number,
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