import { ErrorType } from "../../error/error-type";

export class GetByCodeDTO {
    private constructor(
        private readonly code: string,
    ){}

    static fromObject(object: {[key: string]: any}): [string?, GetByCodeDTO?] {
        const { code, name, price, size } = object;

        if (!code) {
            return [ErrorType.MissingFields];
        }

        if (typeof code !== 'string') {
            return [ErrorType.InvalidFields];
        }

        if (price <= 0) {
            return [ErrorType.InvalidFields];
        }

        return [undefined, new GetByCodeDTO(code)];
    }
}