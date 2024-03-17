import { NextFunction, Request, Response } from "express";
import { AppDataSource } from '../data-source'
import { User } from '../entities/UserEntity'

export const authorization = (roles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const userRepo = AppDataSource.getRepository(User)
        const user = await userRepo.findOne({
            where: { id: req['currentUser'].id }
        })

        // Cambiar la propiedad name por role más adelante
        if (!roles.includes(user.name)) {
            return res.status(403).json({ message: 'Forbidden' })
        }
        next();
    }
}