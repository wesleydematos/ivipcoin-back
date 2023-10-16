import {registerUserController, userLoginController} from "../controllers"
import {ensureDataValidationMiddleware} from "../middlewares"
import {registerSchema, loginSchema} from "../schemas"

import {Router} from "express"

export const userRouter: Router = Router()

userRouter.post("", ensureDataValidationMiddleware(registerSchema), registerUserController)
userRouter.post("/login", ensureDataValidationMiddleware(loginSchema), userLoginController)