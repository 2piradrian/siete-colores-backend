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

        return [undefined, new GetProductByCodeDTO(code)];
    }
}