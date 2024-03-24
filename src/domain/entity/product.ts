export class ProductEntity {
    private constructor(
        private readonly id: string,
        private readonly code: string,
        private readonly name: string,
        private readonly price: number,
        private readonly category: string,
        private readonly size: string
    ){}

    static fromObject(object: {[key: string]: any}): ProductEntity {
        const { _id, id, code, name, price, category, size } = object;

        return new ProductEntity(
            _id || id,
            code,
            name,
            price,
            category,
            size,
        );
    }
}