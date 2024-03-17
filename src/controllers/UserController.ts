import * as express from 'express'
import { Request, Response } from 'express'
import { encrypt } from '../helpers/helpers'
import { User } from '../entities/UserEntity'
import { AppDataSource } from '../data-source'
import { UserDto } from '../dto/User.dto'

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
})

app.delete('/:id', (req: Request, res: Response) => {
    res.send('Delete user')
})

app.post('/signup', async (req: Request, res: Response) => {
    const { name, last_name, email, password } = req.body
    const encryptedPassword = await encrypt.encryptPass(password)
    const user = new User();
    user.name = name;
    user.last_name = last_name
    user.password = encryptedPassword
    user.email = email

    const userRepository = AppDataSource.getRepository(User)
    await userRepository.save(user)

    const userDto = new UserDto()
    userDto.email = user.email
    userDto.name = user.name,
    userDto.last_name = user.last_name

    const token = encrypt.generateToken({ id: user.id, name: user.name })
    return res.status(200).json({ message: "User created successfully", token, userDto })
})

export default app