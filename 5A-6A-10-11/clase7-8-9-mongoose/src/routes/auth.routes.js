import { Router } from "express"
// GET obtener un recurso
// POST crear un recurso
// PUT actualizar un recurso
// PATCH actualizar parcialmente un recurso
// DELETE eliminar un recurso

const authRouter = Router()

authRouter.post("/register")
authRouter.post("/login")
authRouter.post("/logout")

export { authRouter }
