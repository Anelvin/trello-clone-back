import { AppDataSource } from "./data-source"
import * as express from 'express'
import UserController from './controllers/UserController'

const app = express()
const port = 3001;

AppDataSource.initialize().then(async () => {

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))

app.get('/', (req, res) => {
    res.send('Hello world!');
  });

app.use('/users', UserController)

app.listen(port, () => {
    console.log(`Server is listener on port ${port}` )
})
