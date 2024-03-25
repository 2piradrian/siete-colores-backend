export class ProductEntity {
    private constructor(
        public id: string,
        public code: string,
        public name: string,
        public price: number,
        public category: string,
        public size: string
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