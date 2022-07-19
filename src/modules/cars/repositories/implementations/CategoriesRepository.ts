import { Repository } from "typeorm"; //observe que esse repository e do typeorm
import { Category } from "../../entities/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "../interfaces/ICategoriesRepository";
import {AppDataSource} from "../../../../database"

//DTO Data transfer object: criar um objeto responsavel pela transferencia de dados entre uma classe e outra

//observe que o acesso ao Repository está privado somente internamente na classe podemos acessar-lo, diferentemente da abordagem de como usa-lo na documentação do typeorm, aqui da forma como estamos usando, é mais seguro e impede que no momento da instanciação, haja acesso aos métodos do Repository
class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>

    constructor() {
        this.repository = AppDataSource.getRepository(Category) //essa linha garante com que essa classe apenas internamente possa acessar o repository
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> { //essa linha(funçao) recebe um objeto do tipo ICreateCategoryDTO, além disso, Promise<void> = quando n tem retorno, mas está trabalhando com promises
        //salvando no banco de dados:
        const category = this.repository.create({ //esse create cria a tabela do banco pra salvar 
            name,
            description
            //observe que n foi passado o created`_at, isso porque foi feito na entity que irá criar no banco automaticamente
        })
        
        await this.repository.save(category)
    }

    async list(): Promise<Category[]> {
        return await this.repository.find()
    }
}

export { CategoriesRepository }

//se n rodar migration, n cria as tabelas de entitys