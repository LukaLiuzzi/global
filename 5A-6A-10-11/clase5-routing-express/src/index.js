import express from "express"
import { usersRouter } from "./routes/users.routes.js"
import { postsRouter } from "./routes/posts.routes.js"

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send("Bienvenidos a Express")
})

app.use("/users", usersRouter)
app.use("/posts", postsRouter)

app.listen(PORT, () => {
  console.log(`Servidor express escuchando en http://localhost:${PORT}`)
})
