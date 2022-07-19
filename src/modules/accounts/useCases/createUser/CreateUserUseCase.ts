import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { hash } from "bcrypt";

class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    name,
    email,
    username,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
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
