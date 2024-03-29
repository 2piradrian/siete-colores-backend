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

        return [undefined, new CreateBudgetDTO(products, client)];
    }
}