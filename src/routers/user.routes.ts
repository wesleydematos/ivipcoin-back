import {Router} from "express"
import {registerUserController} from "../controllers"

export const userRouter: Router = Router()

userRouter.post("", registerUserController)
// userRouter.post("/login", userLoginController)