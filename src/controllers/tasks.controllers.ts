import {taskSchema} from "../schemas"
import { createTaskService } from "../services"

import {Response} from "express"
import {ValidationError} from "yup"

const createTaskController = async (req: any, res: Response) => {
    const taskData = req.body
    const userId = req.user.id
    const username = req.user.name

    try {
        const validatedTask = await taskSchema.validate(taskData, {
            abortEarly: false
        })
        const [newTask, status] = await createTaskService(validatedTask, userId, username)
        res.status(status as number).json(newTask)
    } catch (error: ValidationError | any) {
        return res.status(400).json({message: error.errors || error})
    }
}

export {createTaskController}