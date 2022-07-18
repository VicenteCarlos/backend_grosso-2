import { Router } from "express" //router cria as rotas
// import { Category } from "../model/Category"
//import { CategoriesRepository } from "../cars/modules/repositories/implementations/CategoriesRepository"
import createCategoryController  from "../cars/modules/useCases/createCategory";
import listCategoriesController  from "../cars/modules/useCases/listCategory";
//import { CreateCategoryService } from "../modules/services/CreateCategoryService"

const categoriesRoutes = Router() //esse Router() infere o tipo do request e response automaticamente, por isso a tipagem nao foi feita logo abaixo

categoriesRoutes.post("/", (request, response) => createCategoryController().handle(request, response))

categoriesRoutes.get("/", (request, response) => listCategoriesController().handle(request, response))

export { categoriesRoutes }

//const categoriesRepository = new CategoriesRepository();
//const categories: Category[] = [] //imagine como se essa linha fosse uma tabela do nosso banco de dados

//categoriesRoutes.post("/", (request, response) => {
    //// const { name, description } = request.body

        // const category = new Category()

        // Object.assign(category, { // essa linha é usado para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto destino.
        //     name,
        //     description,
        //     created_at: new Date()
        // })

        // categories.push(category)

        // categoriesRepository.create({ name, description })

    //// const createCategoryService = new CreateCategoryService(categoriesRepository)

    //// createCategoryService.execute({name, description})

    //// return response.status(201).send()
//})


// categoriesRoutes.get('/', (request, response) => {
//    // const all = categoriesRepository.list();

//     //return response.json(all)
    
// })

//repositiorios: classe responsável por fazer a manipulação de dados da aplicação (acesso ao banco de dados, insert, select)