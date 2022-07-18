import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    "type": "postgres",
    "port": 5432,
    "host": "localhost",
    "username": "docker",
    "password": "ignite",
    "database": "rentx",
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

