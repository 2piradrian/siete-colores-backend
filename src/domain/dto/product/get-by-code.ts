import { ErrorType } from "../../error/error-type";

export class GetProductByCodeDTO {
    private constructor(
        public code: string,
    ){}

    static create(object: {[key: string]: any}): [string?, GetProductByCodeDTO?] {
        const { code } = object;

        if (!code) {
            return [ErrorType.MissingFields];
        }

        if (typeof code !== 'string') {
            return [ErrorType.InvalidFields];
        }

        for (const key in object) {
            if (typeof object[key] === 'string') {
                object[key] = object[key].trim();
            }
        }

        return [undefined, new GetProductByCodeDTO(object.code)];
    }
}