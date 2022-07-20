import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { User } from "../../entities/User"

//o data do metodo create nao foi desestruturado porque a interface tem varios campos
interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>
    findByEmail(email: string): Promise<User>
}


export { IUsersRepository }