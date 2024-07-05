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

        for (const key in object) {
            if (typeof object[key] === 'string') {
                object[key] = object[key].trim();
            }
        }

        return [undefined, new UpdatePricesDTO(object.serie, object.percent)];
    }
}