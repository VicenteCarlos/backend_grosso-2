import { UserRepository } from "../../repositories/implementations/UserRepository";
import { AuthenticateUserController } from "./AuthenticateUserCotroller";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export default (): AuthenticateUserController => {
  const userRepository = new UserRepository();
  const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);
  const authenticateUserController = new AuthenticateUserController(
    authenticateUserUseCase
  );

  return authenticateUserController;
};
