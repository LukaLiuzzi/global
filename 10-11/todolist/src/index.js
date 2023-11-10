import express from "express"
import { tasksRouter } from "./routes/tasks.routes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/tasks", tasksRouter)

app.listen(8080, () => {
  console.log(`El servidor esta corriendo en http://localhost:8080`)
})
