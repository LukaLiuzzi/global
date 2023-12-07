import http from "node:http"
import express from "express"
import { Server } from "socket.io"

// Configuración del servidor
// --------------------------
// Creo una aplicación de express
const app = express()
// Creo el servidor http con la configuración de express
const server = http.createServer(app)
// Creo el servidor de websockets con la configuración del servidor http
const io = new Server(server)

// Configuración de la aplicación
// ------------------------------
// Indico que la carpeta 'public' es estática
app.use(express.static("public"))

// Configuración de los websockets
// -------------------------------
// Cuando un cliente se conecta
io.on("connection", (socket) => {
  // El socket es el cliente
  console.log("Un cliente se ha conectado", socket.id)

  // Cuando el cliente envía un mensaje
  socket.on("message", ({ name, message }) => {
    console.log("Mensaje recibido", name, message)

    // Envío el mensaje a todos los clientes
    io.emit("message", { name, message })
    // Envío el mensaje a todos los clientes menos al que lo envió
    // socket.broadcast.emit("message", { name, message })
  })

  socket.on("typing", (name) => {
    console.log("Escribiendo", name)

    // Envío el mensaje a todos los clientes
    socket.broadcast.emit("typing", name)
    // Envío el mensaje a todos los clientes menos al que lo envió
    // socket.broadcast.emit("typing", name)
  })

  socket.on("stopTyping", (name) => {
    console.log("Dejó de escribir")

    // Envío el mensaje a todos los clientes
    socket.broadcast.emit("stopTyping", name)
    // Envío el mensaje a todos los clientes menos al que lo envió
    // socket.broadcast.emit("stopTyping")
  })

  // Cuando el cliente se desconecta
  socket.on("disconnect", () => {
    console.log("El cliente se ha desconectado", socket.id)
  })
})

// Inicio el servidor
// ------------------
server.listen(8080, () => {
  console.log("Servidor iniciado en http://localhost:8080")
})
