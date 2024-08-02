import { ErrorType } from "../../error/error-type";

export class UpdateProductDTO {
    private constructor(
        public code: string,
        public name: string,
        public price: number,
        public size: string,
        public category: string,
        public keywords: string[] = []
    ){}

    static create(object: {[key: string]: any}): [string?, UpdateProductDTO?] {
        const { code, name, price, size, category, keywords } = object;

        if (!code || !name || price === undefined || !size || !category || keywords === undefined) {
            return [ErrorType.MissingFields];
        }

        const priceNumber = parseFloat(price);

        if (typeof code !== 'string' || typeof name !== 'string' || typeof priceNumber !== 'number' || typeof size !== 'string' || typeof category !== 'string') {
            return [ErrorType.InvalidFields];
        }

        if (!Array.isArray(keywords)) {
            return [ErrorType.InvalidFields];
        }

        if (priceNumber <= 0) {
            return [ErrorType.InvalidFields];
        }

        for (const key in object) {
            if (typeof object[key] === 'string') {
                object[key] = object[key].trim();
            }
        }

        object.keywords = keywords.filter((keyword: string) => typeof keyword === 'string' && keyword.trim().length > 0);

        return [undefined, new UpdateProductDTO(object.code, object.name, object.price, object.size, object.category, object.keywords)];
    }
}