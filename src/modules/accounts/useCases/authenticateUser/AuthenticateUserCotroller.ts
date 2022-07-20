import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

class AuthenticateUserController {
    constructor(private authenticateUserUseCase: AuthenticateUserUseCase){}
    
    async handle(request: Request, response: Response): Promise<Response> {
        const { password, email} = request.body;

        const token = await this.authenticateUserUseCase.execute({ password, email })

        return response.json(token)
    }
}

//esse codigo so funcionou porque o authenticateUserUseCase.execute() e uma promisse

export { AuthenticateUserController }