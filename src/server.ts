//reflect metadata sempre vem primeiro
import "reflect-metadata"
import * as express from 'express';
import { categoriesRoutes } from './routes/categories.routes'
import { usersRouter } from './routes/users.routes'
import "./database"

const app = express()

app.use(express.json())

app.use("/categories", categoriesRoutes)

app.use("/users", usersRouter)

app.listen(3000, () => console.log('Server is running'))