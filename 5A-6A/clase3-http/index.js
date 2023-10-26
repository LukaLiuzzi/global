const http = require("node:http")
const url = require("node:url")

// const server = http.createServer((req, res) => {
//   // req: request => Peticion que nos llega desde el cliente
//   // res: response => Respuesta que le enviamos al cliente
//   res.statusCode = 200
//   res.setHeader("Content-Type", "text/html")
//   res.end("<h1>Hola mundo desde nodejs usando el modulo http</h1>")
// })

// server.listen(8080, "localhost", () => {
//   console.log("Servidor ejecutandose en el puerto 8080")
// })

const router = {
  "/": (req, res) => {
    res.statusCode = 200
    res.setHeader = ("Content-Type", "text/html")
    res.end("<h1>Inicio</h1>")
  },
  "/about": (req, res) => {
    res.statusCode = 200
    res.setHeader = ("Content-Type", "text/html")
    res.end("<h1>Acerca de nosotros</h1>")
  },
}

const server = http.createServer((req, res) => {
  console.log(req.url)
  const path = url.parse(req.url).pathname

  if (router[path]) {
    router[path](req, res)
  } else {
    res.statusCode = 404
    res.setHeader = ("Content-Type", "text/html")
    res.end("<h1>404 Ruta no encontrada</h1>")
  }
})

server.listen(8080, "localhost", () => {
  console.log("Servidor ejecutandose en el puerto 8080")
})
