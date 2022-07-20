import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";

// interface IPayload {
//     id: string;
// }

export const ensureAuthenticated = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing")
    }

    const [, token] = authHeader.split(" "); //nessa linha, na desestruturaçao da posiçao 1, e onde esta o token

    try {
        const { sub } = verify(token, "8c2c5cc4624c537c4301fe2537985b26")
        console.log(sub)

        next()
    } catch {
        throw new AppError("Invalid token!")
    }
};
