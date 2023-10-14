import {iUserRegister} from "../interfaces"
import { registerSchema } from "../schemas";
import {registerUserService} from "../services"

import {Request, Response} from "express"
import { ValidationError } from 'yup'

const registerUserController = async (req: Request, res: Response) => {
    const userData: iUserRegister = req.body

    try {
        const validatedRegister = await registerSchema.validate(userData, {
          abortEarly: false,
        })
        const [newUser, status] = await registerUserService(validatedRegister)
        return res.status(status as number).json(newUser)
      } catch (error: ValidationError | any) {
        return res.status(400).json({ message: error.errors || error})
      }
}

export {registerUserController}