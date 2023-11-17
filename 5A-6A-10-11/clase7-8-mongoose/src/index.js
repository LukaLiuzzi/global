import express from "express"
import { connectDB } from "./config/db.js"
import { usersRouter } from "./routes/users.routes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/users", usersRouter)

const main = async () => {
  await connectDB()
  app.listen(8080, () =>
    console.log("Servidor corriendo en http://localhost:8080")
  )
}

main()
