import { Router } from "express";
import createUserController from "../modules/accounts/useCases/createUser";

const usersRouter = Router();

usersRouter.post("/", (req, res) => createUserController().handle(req, res));

export { usersRouter }