import express, { Application, Request, Response } from 'express'

const app: Application = express()

const port = 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to this API` })
})

try {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
} catch (error: any) {
    console.log(`Error occurred: ${error.message}`)
}