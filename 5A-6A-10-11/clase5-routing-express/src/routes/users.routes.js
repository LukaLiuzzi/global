import { Router } from "express"

const usersRouter = Router()

usersRouter.get("/", (req, res) => {
  res.send("Lista de usuarios")
})

usersRouter.get("/:nombre", (req, res) => {
  const { nombre } = req.params
  res.send(`Usuario: ${nombre}`)
})

export { usersRouter }
