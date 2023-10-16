import {ensureAuthMiddleware} from "../middlewares"
import {createTaskController, deleteTaskController, listTasksController, updateTaskController} from "../controllers"

import {Router} from "express"

export const tasksRouter: Router = Router()

tasksRouter.post("", ensureAuthMiddleware, createTaskController)
tasksRouter.get("", ensureAuthMiddleware, listTasksController)
tasksRouter.patch("/:id", ensureAuthMiddleware, updateTaskController)
tasksRouter.delete("/:id", ensureAuthMiddleware, deleteTaskController)