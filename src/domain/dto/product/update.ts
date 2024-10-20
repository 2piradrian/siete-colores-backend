import { Sanitizer, TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-type";

export class UpdateProductDTO {
    private constructor(
        public code: string,
        public name: string,
        public price: number,
        public size: string,
        public category: string,
        public description: string,
        public keywords: string[],
        public stock: number | null,
    ){}

    static create(data: {[key: string]: any}): [string?, UpdateProductDTO?] {
        Sanitizer.trimStrings(data);

        if (!TypeChecker.areDefined([data.code, data.name, data.price, data.size, data.category, data.keywords])) {
            return [ErrorType.MissingFields];
        }

        if (!TypeChecker.areDefined([data.description])) {
            data.description = '';
        }

        data.price = parseFloat(data.price);
        if (!TypeChecker.areNumbers([data.price]) || data.price <= 0) {
            return [ErrorType.InvalidFields];
        }

        if (!TypeChecker.areStrings([data.code, data.name, data.size, data.category, data.description])) {
            return [ErrorType.InvalidFields];
        }
        if (!Array.isArray(data.keywords) || !TypeChecker.areStrings(data.keywords)) {
            return [ErrorType.InvalidFields];
        }

        if (!TypeChecker.areNumbers([data.stock]) && data.stock !== null) {
            return [ErrorType.InvalidFields];
        }

        return [undefined, new UpdateProductDTO(data.code, data.name, data.price, data.size, data.category, data.description, data.keywords, data.stock)];
    }
}