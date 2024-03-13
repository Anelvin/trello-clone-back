import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "trello",
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: ['src/migrations/**/*.ts'],
    migrationsRun: true,
    subscribers: [],
})
