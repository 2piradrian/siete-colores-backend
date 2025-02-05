export class ProductEntity {
    private constructor(
        public id: string,
        public code: string,
        public name: string,
        public price: number,
        public size: string,
        public category: string,
        public subcategories: string[],
        public description: string,
        public keywords: string[],
        public available: boolean,
        public createdAt: Date,
    ){}

    static fromObject(object: {[key: string]: any}): ProductEntity {
        const { _id, id, code, name, price, category, subcategories, size, description, keywords, available, createdAt } = object;

        return new ProductEntity(
            _id || id,
            code,
            name,
            price,
            size,
            category,
            subcategories,
            description,
            keywords,
            available,
            createdAt,
        );
    }
}