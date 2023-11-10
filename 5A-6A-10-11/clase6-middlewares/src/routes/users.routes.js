import { Router } from "express"
import { getOneUser, getUsers } from "../controllers/users.controllers.js"
import { isAdmin } from "../middlewares/isAdmin.js"

const usersRouter = Router()

usersRouter.post("/", getUsers)

usersRouter.post("/:id", isAdmin, getOneUser)

export { usersRouter }
