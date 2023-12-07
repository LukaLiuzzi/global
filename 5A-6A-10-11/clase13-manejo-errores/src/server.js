import express from "express"
import { authRouter } from "./routes/auth.route.js"
import { errorMiddleware } from "./middlewares/error.middleware.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/auth", authRouter)

app.use(errorMiddleware)

app.listen(8080, () =>
  console.log(`Servidor corriendo en http://localhost:8080`)
)
