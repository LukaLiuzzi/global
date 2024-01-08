import express from "express"
import { usersRouter } from "./routes/users.routes.js"

const app = express()

app.use("/users", usersRouter)

app.listen(8080, () => console.log("Servidor levantado en puerto 8080"))
