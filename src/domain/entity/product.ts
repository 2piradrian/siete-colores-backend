export class ProductEntity {
    private constructor(
        public id: string,
        public code: string,
        public name: string,
        public price: number,
        public size: string,
        public category: string,
        public keywords: string[]
    ){}

    static fromObject(object: {[key: string]: any}): ProductEntity {
        const { _id, id, code, name, price, category, size, keywords } = object;

        return new ProductEntity(
            _id || id,
            code,
            name,
            price,
            size,
            category,
            keywords
        );
    }
}