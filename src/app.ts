import {userRouter, tasksRouter} from "./routers"

import "express-async-errors"
import express, {Application} from "express" 
import cors from "cors"
import {handleError} from "./errors/App.error"

const app: Application = express() 

app.use(express.json())
app.use(cors())

app.use("/user", userRouter)
app.use("/tasks", tasksRouter)

app.use(handleError)

export default app