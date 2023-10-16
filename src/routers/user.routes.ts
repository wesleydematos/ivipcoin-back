import {registerUserController, userLoginController} from "../controllers"

import {Router} from "express"

export const userRouter: Router = Router()

userRouter.post("", registerUserController)
userRouter.post("/login", userLoginController)