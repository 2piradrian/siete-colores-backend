import { ErrorType } from "../../error/error-type";

export class CreateProductDTO {
    private constructor(
        public code: string,
        public name: string,
        public price: number,
        public size: string,
        public category: string
    ){}

    static create(object: {[key: string]: any}): [string?, CreateProductDTO?] {
        const { code, name, price, size, category } = object;

        if (!code || !name || price == undefined || !size || !category) {
            return [ErrorType.MissingFields];
        }
        
        const priceNumber = parseFloat(price);

        if (typeof code !== 'string' || typeof name !== 'string' || typeof priceNumber !== 'number' || typeof size !== 'string' || typeof category !== 'string') {
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

        return [undefined, new CreateProductDTO(code, name, priceNumber, size, category)];
    }
}