import { ErrorType } from "../../error/error-type";

export class UpdatePricesProductDTO {
    private constructor(
        public series: string,
        public percent: number,
    ){}

    static create(object: {[key: string]: any}): [string?, UpdatePricesProductDTO?] {
        const { series, percent } = object;

        if (!series || !percent) {
            return [ErrorType.MissingFields];
        }

        if (typeof series !== 'string' || typeof percent !== 'number') {
            return [ErrorType.InvalidFields];
        }

        return [undefined, new UpdatePricesProductDTO(series, percent)];
    }
}