import {ensureAuthMiddleware, ensureDataValidationMiddleware} from "../middlewares"
import {createTaskController, deleteTaskController, listTasksController, updateTaskController} from "../controllers"
import {taskSchema} from "../schemas"

import {Router} from "express"

export const tasksRouter: Router = Router()

tasksRouter.post("", ensureAuthMiddleware, ensureDataValidationMiddleware(taskSchema), createTaskController)
tasksRouter.get("", ensureAuthMiddleware, listTasksController)
tasksRouter.patch("/:id", ensureAuthMiddleware, ensureDataValidationMiddleware(taskSchema), updateTaskController)
tasksRouter.delete("/:id", ensureAuthMiddleware, deleteTaskController)