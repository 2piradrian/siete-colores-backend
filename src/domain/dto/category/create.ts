import { ErrorType } from "../../error/error-type";

export class CreateCategoryDTO {
    private constructor(
        public name: string
    ){}

    static create(object: {[key: string]: any}): [string?, CreateCategoryDTO?] {
        const { name } = object;

        if (!name) {
            return [ErrorType.MissingFields];
        }
        
        if (typeof name !== 'string') {
            return [ErrorType.InvalidFields];
        }

        for (const key in object) {
            if (typeof object[key] === 'string') {
                object[key] = object[key].trim();
            }
        }

        return [undefined, new CreateCategoryDTO(object.name)];
    }
}