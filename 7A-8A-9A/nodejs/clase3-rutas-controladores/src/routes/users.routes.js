import { Router } from "express"
import {
  createUser,
  deleteUser,
  editUser,
  getUser,
  getUsers,
} from "../controllers/users.controllers.js"

const usersRouter = Router()

usersRouter.get("/", getUsers)

// URL PARAMS
usersRouter.get("/:id", getUser)

usersRouter.post("/", createUser)

usersRouter.put("/:id", editUser)

usersRouter.delete("/:id", deleteUser)

export { usersRouter }
