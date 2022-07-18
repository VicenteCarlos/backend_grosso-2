import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository"

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute() {
        return this.categoriesRepository.list();
    }    
}

export { ListCategoriesUseCase }