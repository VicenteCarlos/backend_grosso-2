import { Router } from "express";
import authenticateUserController from "../modules/accounts/useCases/authenticateUser";

const authenticateRoutes = Router();

authenticateRoutes.post("/sessions", (request, response) =>
  authenticateUserController().handle(request, response)
);

export { authenticateRoutes };
