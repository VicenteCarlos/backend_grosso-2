import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

// const categoriesRepository = new CategoriesRepository();

// const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

// const createCategoryController = new CreateCategoryController(
//   createCategoryUseCase
// );

// export { createCategoryController };
export default (): CreateCategoryController => {
  const categoriesRepository = new CategoriesRepository();

  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

  const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
  );

  return createCategoryController
};

//a refatoraçao deste arquivo foi feita pra ter um controle do momento em que ele vai ser executado

//para receber o controller nas rotas, pode-se fazer dentro do useCase que tem esse controller a ser recebido, um arquivo pra instanciar tudo o que se precisa, como o repositorio e o useCase pra usar dentro das rotas
