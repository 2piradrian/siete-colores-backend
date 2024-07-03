import { CreateCategoryDTO, DeleteCategoryDTO, ErrorType, ProductEntity } from "../../../domain";
import { CategoryRepository_I } from "../../../infrastructure"

export class CategoryService {
    constructor(
        private readonly categoryRepository = new CategoryRepository_I()
    ){}

    public async getAll() {
        try {
            return await this.categoryRepository.getAll();
        }
        catch(error){
            throw error
        }
    }

    public async create(dto: CreateCategoryDTO) {
        try {
            const categories = await this.categoryRepository.getAll();

            for (const category of categories) {
                if (category.name === dto.name) {
                    throw new Error(ErrorType.AlreadyExists); 
                }
            }

            const category = ProductEntity.fromObject(dto);
            return await this.categoryRepository.create(category);
        }
        catch(error){
            throw error
        }
    }

    public async delete(dto: DeleteCategoryDTO) {
        try {
            return await this.categoryRepository.delete(dto.name);
        }
        catch(error){
            throw error
        }
    }
}