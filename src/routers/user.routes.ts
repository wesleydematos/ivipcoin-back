import {Router} from "express"
import {registerUserController, userLoginController} from "../controllers"

export const userRouter: Router = Router()

userRouter.post("", registerUserController)
userRouter.post("/login", userLoginController)