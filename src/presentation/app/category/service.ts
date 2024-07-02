export class CategoryService {
    constructor(
        //private readonly repository = new CategoryRepository_I()
    ){}

    public async getAll() {
        try {
            //return await this.repository.getAll();
        }
        catch(error){
            throw error
        }
    }

    public async create() {
        try {
            //const product = ProductEntity.fromObject(dto);

            //return await this.repository.create(product);
        }
        catch(error){
            throw error
        }
    }

    public async delete() {
        try {
            //const product = ProductEntity.fromObject(dto);

            //return await this.repository.update(product);
        }
        catch(error){
            throw error
        }
    }
}