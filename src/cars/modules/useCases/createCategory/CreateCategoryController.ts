import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

//va em routes e copie tudo dentro da requisiçao post
class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;

    this.createCategoryUseCase.execute({ name, description });

    return res.status(201).send();
  }
}

export { CreateCategoryController };
