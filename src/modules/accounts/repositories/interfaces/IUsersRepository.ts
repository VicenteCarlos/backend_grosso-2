import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"

//o data do metodo create nao foi desestruturado porque a interface tem varios campos
interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>
}

export { IUsersRepository }