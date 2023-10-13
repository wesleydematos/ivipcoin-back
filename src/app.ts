import {userRouter, tasksRouter} from "./routers"

import express, {Application} from "express" 
import cors from "cors"

const app: Application = express() 

app.use(express.json())
app.use(cors())

app.use("/user", userRouter)
app.use("/tasks", tasksRouter)

export default app