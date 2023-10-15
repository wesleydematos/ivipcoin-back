import {Router} from "express"
import {ensureAuthMiddleware} from "../middlewares"
import {createTaskController} from "../controllers"

export const tasksRouter: Router = Router()

tasksRouter.post("", ensureAuthMiddleware, createTaskController)