import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    "type": "postgres",
    "port": 5432,
    "host": "database_ignite", //como nao to rodando o docker, nao da pra colocar o database_ignite
    "username": "docker",
    "password": "ignite",
    "database": "rentx",
    "entities": ["./src/cars/modules/entities/*.ts"],
    "migrations": ["./src/database/migrations/*.ts"]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

