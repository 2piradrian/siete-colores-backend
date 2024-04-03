import { ErrorType } from "../../error/error-type";

export class CreateBudgetDTO {
    private constructor(
        public products: { code: string, quantity: number}[],
        public client: string,
    ){}

    static create(object: {[key: string]: any}): [string?, CreateBudgetDTO?] {
        const { products, client } = object;

        if (!products || !client) {
            return [ErrorType.MissingFields];
        }

        if (!Array.isArray(products) || typeof client !== 'string') {
            return [ErrorType.InvalidFields];
        }

        for (const key in object) {
            if (typeof object[key] === 'string') {
                object[key] = object[key].trim();
            }
        }

        return [undefined, new CreateBudgetDTO(products, client)];
    }
}