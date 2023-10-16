import {iTask} from "../interfaces"
import {createTaskService, deleteTaskService, listTasksService, updateTaskService} from "../services"

import {Response} from "express"

const createTaskController = async (req: any, res: Response) => {
    const taskData: iTask = req.body
    const userId: string = req.user.id
    const username: string = req.user.name

    try {
        const [newTask, status] = await createTaskService(taskData, userId, username)
        res.status(status as number).json(newTask)
    } catch (error) {
        return res.status(400).json({message: error})
    }
}

const listTasksController = async (_req: any, res: Response) => {
    try {
        const [tasks, status] = await listTasksService()
        return res.status(status as number).json(tasks)
    } catch (error) {
        return res.status(400).json({message: error})
    }
}

const updateTaskController = async (req: any, res: Response) => {
    const taskData: iTask = req.body
    const taskId: string = req.params.id

    try {
        const [updatedTask, status] = await updateTaskService(taskId, taskData)
        return res.status(status as number).json(updatedTask)
    } catch (error) {
        return res.status(400).json({message: error})
    }
}

const deleteTaskController = async (req: any, res: Response) => {
    const taskId: string = req.params.id

    try {
        const [response, status] = await deleteTaskService(taskId)
        return res.status(status as number).json(response)
    } catch (error) {
        return res.status(400).json({message: error})
    }
}

export {createTaskController, listTasksController, updateTaskController, deleteTaskController}