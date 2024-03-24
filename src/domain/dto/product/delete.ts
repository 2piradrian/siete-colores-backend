import { ErrorType } from "../../error/error-type";

export class DeleteProductDTO {
    private constructor(
        private readonly code: string,
    ){}

    static create(object: {[key: string]: any}): [string?, DeleteProductDTO?] {
        const { code } = object;

        if (!code) {
            return [ErrorType.MissingFields];
        }

        if (typeof code !== 'string') {
            return [ErrorType.InvalidFields];
        }


        return [undefined, new DeleteProductDTO(code)];
    }
}