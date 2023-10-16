import {taskSchema} from "../schemas"
import {createTaskService, deleteTaskService, listTasksService, updateTaskService} from "../services"

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

const listTasksController = async (_req: any, res: Response) => {
    const [tasks, status] = await listTasksService()
    return res.status(status as number).json(tasks)
}

const updateTaskController = async (req: any, res: Response) => {
    const taskData = req.body
    const taskId = req.params.id

    try {
        const validatedTask = await taskSchema.validate(taskData, {
        abortEarly: false,
        })
        const [updatedTask, status] = await updateTaskService(taskId, validatedTask)
        return res.status(status as number).json(updatedTask)
    } catch (error: ValidationError | any) {
        return res.status(400).json({message: error.errors || error})
    }
}

const deleteTaskController = async (req: any, res: Response) => {
    const taskId = req.params.id
    const [response, status] = await deleteTaskService(taskId)
    return res.status(status as number).json(response)
}

export {createTaskController, listTasksController, updateTaskController, deleteTaskController}