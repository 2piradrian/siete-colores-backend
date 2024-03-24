import { ErrorType } from "../../error/error-type";

export class UpdateProductDTO {
    private constructor(
        private readonly code: string,
        private readonly name: string,
        private readonly price: number,
        private readonly size: string
    ){}

    static create(object: {[key: string]: any}): [string?, UpdateProductDTO?] {
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

        return [undefined, new UpdateProductDTO(code, name, price, size)];
    }
}