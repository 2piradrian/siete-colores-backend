import { ErrorType } from "../../error/error-type";

export class DeleteCategoryDTO {
    private constructor (
        public name: string,
    ){}

    static create(object: {[key: string]: any}): [string?, DeleteCategoryDTO?] {
        const { name } = object;

        if (!name) {
            return [ErrorType.MissingFields];
        }

        if (typeof name !== 'string') {
            return [ErrorType.InvalidFields];
        }

        return [undefined, new DeleteCategoryDTO(name)];
    }
}