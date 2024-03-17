import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
import { PayloadDto } from '../dto/payload.dto'
import * as dotenv from 'dotenv'

dotenv.config()

const { JWT_SECRET = '' } = process.env
export class encrypt {
    static async encryptPass(password: string) {
        return bcrypt.hashSync(password, 12)
    }

    static async comparePassword(hashPassword: string, password: string) {
        return bcrypt.compareSync(password, hashPassword)
    }

    static async generateToken(payload: PayloadDto) {
        return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" })
    }
}
