import { ErrorType } from "../../error/error-type";

export class UpdatePricesDTO {
    private constructor(
        public serie: string,
        public percent: number,
    ){}

    static create(object: {[key: string]: any}): [string?, UpdatePricesDTO?] {
        const { serie, percent } = object;

        if (!serie || percent === undefined) {
            return [ErrorType.MissingFields];
        }

        if (typeof serie !== 'string' || typeof percent !== 'number') {
            return [ErrorType.InvalidFields];
        }

        return [undefined, new UpdatePricesDTO(serie, percent)];
    }
}