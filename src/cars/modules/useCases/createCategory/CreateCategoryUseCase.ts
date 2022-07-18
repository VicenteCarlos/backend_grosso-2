//service tem a funçao de executar os métodos HTTP por baixo dos panos
import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ description, name }: IRequest): void {
        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase }

//implements faz com que a classe tenha todos os tipos de dados da interface ex da Interface de cima: class Nome{private nome: string; description: string}