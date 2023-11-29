import express from "express"
import session from "express-session"
import cookieParser from "cookie-parser"
import MongoStore from "connect-mongo"
import { connectDB } from "./config/db.js"
import { usersRouter } from "./routes/users.routes.js"
import { productsRouter } from "./routes/products.routes.js"
import { authRouter } from "./routes/auth.routes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/5-6-10-11",
    }),
    cookie: {
      secure: false,
    },
  })
)

app.use(cookieParser())

// Trackeo de endpoints visitados
// app.use((req, res, next) => {
//   if (req.session.visited === undefined) {
//     req.session.visited = []
//   } else {
//     req.session.visited.push(req.url)
//   }
//   console.log(req.session)
//   next()
// })

app.use("/users", usersRouter)
app.use("/auth", authRouter)
app.use("/products", productsRouter)

const main = async () => {
  try {
    await connectDB()
    app.listen(8080, () =>
      console.log("Servidor corriendo en http://localhost:8080")
    )
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
