import {iUserLogin, iUserRegister} from "../interfaces"
import {loginSchema, registerSchema} from "../schemas"
import {registerUserService, userLoginService} from "../services"

import {Request, Response} from "express"
import {ValidationError} from "yup"

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

const userLoginController = async (req: Request, res: Response) => {
  const userData: iUserLogin = req.body

  try {
    const validatedLogin = await loginSchema.validate(userData, {
      abortEarly: false,
    })
    const [user, status] = await userLoginService(validatedLogin)
    return res.status(status as number).json(user)
  } catch (error: ValidationError | any) {
    return res.status(401).json({message: error.errors || error})
  }
}

export {registerUserController, userLoginController}