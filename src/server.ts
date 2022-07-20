//reflect metadata sempre vem primeiro
import "reflect-metadata"
import * as express from 'express';
import { Request,Response } from "express";
import { categoriesRoutes } from './routes/categories.routes'
import { usersRouter } from './routes/users.routes'
import {authenticateRoutes} from "./routes/authenticate.routes"
import "./database"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AppError } from "./errors/AppError";
import "express-async-errors"

const app = express()

app.use(express.json())

app.use("/categories", categoriesRoutes)

app.use("/users", usersRouter)

app.use(authenticateRoutes)

app.use(ensureAuthenticated)

app.use((err: Error ,request: Request, response: Response, next: express.NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})


app.listen(3000, () => console.log('Server is running'))