import * as express from 'express'
import { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Get users')
})

app.get('/:id', (req: Request, res: Response) => {
    res.send('Get user')
})

app.post('/', (req: Request, res: Response) => {
    res.send('Save user')
})

app.put('/:id', (req: Request, res: Response) => {
    res.send('Update user')
})<

app.delete('/:id', (req: Request, res: Response) => {
    res.send('Delete user')
})

export default app