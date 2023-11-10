import express from "express"
import { usersRouter } from "./routes/users.routes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/users", usersRouter)

app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" })
})

app.listen(8080, () =>
  console.log("Servidor levantado en http://localhost:8080")
)
