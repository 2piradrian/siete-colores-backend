import { ErrorType } from "../../error/error-type";

export class GetBudgetByIdDTO {
    private constructor(
        public id: string,
    ){}

    static create(object: {[key: string]: any}): [string?, GetBudgetByIdDTO?] {
        const { id } = object;

        if (!id) {
            return [ErrorType.MissingFields];
        }

        if (typeof id !== 'string') {
            return [ErrorType.InvalidFields];
        }

        for (const key in object) {
            if (typeof object[key] === 'string') {
                object[key] = object[key].trim();
            }
        }

        return [undefined, new GetBudgetByIdDTO(id)];
    }
}