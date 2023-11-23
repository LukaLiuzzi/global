import { Router } from "express"
import {
  createUser,
  deleteUser,
  editUser,
  getAllUsers,
  getOneUser,
} from "../controllers/users.controllers.js"

// GET obtener un recurso
// POST crear un recurso
// PUT actualizar un recurso
// PATCH actualizar parcialmente un recurso
// DELETE eliminar un recurso

const usersRouter = Router()

usersRouter.get("/", getAllUsers)

usersRouter.post("/", createUser)

usersRouter.get("/:id", getOneUser)

usersRouter.patch("/:id", editUser)

usersRouter.delete("/:id", deleteUser)

export { usersRouter }
