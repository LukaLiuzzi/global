const http = require("http")
const url = require("url")

const router = {
  "/": (req, res) => {
    console.log(req)
    res.statusCode = 200
    res.setHeader("Content-type", "text/html")
    res.end("<h1>Hola mundo desde NodeJS</h1>")
  },
  "/about": (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-type", "text/html")
    res.end("<h1>Acerca de nosotros</h1>")
  },
  "/contact": (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-type", "text/html")
    res.end("<h1>Contactanos</h1>")
  },
}

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname

  if (router[path]) {
    router[path](req, res)
  } else {
    res.statusCode = 404
    res.setHeader("Content-type", "text/html")
    res.end("<h1>404 Not Found</h1>")
  }
})

server.listen(8080, () => {
  console.log("El servidor está escuchando en el puerto 8080")
})
