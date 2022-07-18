//service tem a funçao de executar os métodos HTTP por baixo dos panos
// import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

// interface IRequest {
//     name: string;
//     description: string;
// }

// class CreateCategoryService {
//     constructor(private categoriesRepository: ICategoriesRepository) {}

//     execute({ description, name }: IRequest): void {
//         this.categoriesRepository.create({ name, description })
//     }
// }

// export { CreateCategoryService }

//implements faz com que a classe tenha todos os tipos de dados da interface ex da Interface de cima: class Nome{private nome: string; description: string}
//copia e cola tudo desse arquivo e joga dentro do useCases/createCategory e renomeia terminando com UseCase