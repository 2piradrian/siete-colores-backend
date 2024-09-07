export class ProductEntity {
    private constructor(
        public id: string,
        public code: string,
        public name: string,
        public price: number,
        public size: string,
        public category: string,
        public description: string,
        public keywords: string[]
    ){}

    static fromObject(object: {[key: string]: any}): ProductEntity {
        const { _id, id, code, name, price, category, size, description, keywords } = object;

        return new ProductEntity(
            _id || id,
            code,
            name,
            price,
            size,
            category,
            description,
            keywords
        );
    }
}