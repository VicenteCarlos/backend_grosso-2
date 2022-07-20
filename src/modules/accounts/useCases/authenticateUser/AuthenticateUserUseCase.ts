import { compare } from "bcrypt";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import {sign} from "jsonwebtoken"
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    email: string;
    password: string
}

interface IResponse {
    user: {
        name: string,
        email: string
    }
    token: string;
}

class AuthenticateUserUseCase {
    constructor(private userRepository: UserRepository){}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email)

        if (!user) {
            throw new AppError("Email or password as incorrect")
        }

        const passwordMatch = await compare(password, user.password) //essa linha verifica se as senhas sao iguais
        
        if (!passwordMatch) {
            throw new AppError("Email or password as incorrect")
        }

        //quando o compilador ler ate essa linha, significa que o usuario existe e e valido
        const token = sign({}, "8c2c5cc4624c537c4301fe2537985b26", {
            subject: user.id,
            expiresIn: "1d" //essa linha e o tempo de expiraçao do token
        }) //primeiro parametro: nome do usuario, nunca a senha. segundo parametro: palavra secreta pra auxiliar a criaçao do token, terceiro parametro: recebe um subject e se passa o id do usuario nele
    
        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn
    }
}

export { AuthenticateUserUseCase }