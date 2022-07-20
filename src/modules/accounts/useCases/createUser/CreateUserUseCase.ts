import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { hash } from "bcrypt";
import { AppError } from "../../../../errors/AppError";

class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    name,
    email,
    username,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email)
    
    if (userAlreadyExists) {
      throw new AppError("User already exists")
    }

    const passwordHash = await hash(password, 8); //o segundo parametro do hash faz com que a senha fique mais forte

    this.userRepository.create({
      name,
      email,
      username,
      password: passwordHash,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
