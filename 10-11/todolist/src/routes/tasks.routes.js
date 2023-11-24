import { Router } from "express"
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/tasks.controllers.js"

const tasksRouter = Router()

tasksRouter.get("/", getAllTasks)

tasksRouter.get("/:id", getTask)

tasksRouter.post("/", createTask)

tasksRouter.put("/:id", updateTask)

tasksRouter.delete("/:id", deleteTask)

export { tasksRouter }
