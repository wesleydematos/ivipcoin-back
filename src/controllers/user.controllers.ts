import {iUserLogin, iUserRegister} from "../interfaces"
import {registerUserService, userLoginService} from "../services"

import {Request, Response} from "express"

const registerUserController = async (req: Request, res: Response) => {
  const userData: iUserRegister = req.body

  try {
    const [newUser, status] = await registerUserService(userData)
    return res.status(status as number).json(newUser)
  } catch (error) {
    return res.status(400).json({message: error})
  }
}

const userLoginController = async (req: Request, res: Response) => {
  const userData: iUserLogin = req.body

  try {
    const [user, status] = await userLoginService(userData)
    return res.status(status as number).json(user)
  } catch (error) {
    return res.status(401).json({message: error})
  }
}

export {registerUserController, userLoginController}