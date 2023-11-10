import { Router } from "express"
import {
  createTask,
  getAllTasks,
  getTask,
} from "../controllers/tasks.controllers.js"

const tasksRouter = Router()

tasksRouter.get("/", getAllTasks)

tasksRouter.get("/:id", getTask)

tasksRouter.post("/", createTask)

tasksRouter.put("/:id", (req, res) => {
  res.send(`Task ${req.params.id} updated`)
})

tasksRouter.delete("/:id", (req, res) => {
  res.send(`Task ${req.params.id} deleted`)
})

export { tasksRouter }
