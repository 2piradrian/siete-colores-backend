import { ErrorType } from "../../error/error-type";

export class CreateProductDTO {
    private constructor(
        private readonly code: string,
        private readonly name: string,
        private readonly price: number,
        private readonly size: string
    ){}

    static fromObject(object: {[key: string]: any}): [string?, CreateProductDTO?] {
        const { code, name, price, size } = object;

        if (!code || !name || !price || !size) {
            return [ErrorType.MissingFields];
        }

        if (typeof code !== 'string' || typeof name !== 'string' || typeof price !== 'number' || typeof size !== 'string') {
            return [ErrorType.InvalidFields];
        }

        if (price <= 0) {
            return [ErrorType.InvalidFields];
        }

        return [undefined, new CreateProductDTO(code, name, price, size)];
    }
}