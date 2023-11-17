import { Router } from "express"
import { createUser, getAllUsers } from "../controllers/users.controllers.js"

const usersRouter = Router()

usersRouter.get("/", getAllUsers)

usersRouter.post("/", createUser)

export { usersRouter }
