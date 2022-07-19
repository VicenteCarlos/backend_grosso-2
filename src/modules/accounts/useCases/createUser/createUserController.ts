import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, password, email, driver_license } = request.body;

    this.createUserUseCase.execute({
      name,
      username,
      password,
      email,
      driver_license,
    });

    return response.status(201).send()
  }
}

export { CreateUserController };
