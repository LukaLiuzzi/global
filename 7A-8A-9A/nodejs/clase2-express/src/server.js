// Importamos la libreria
const express = require("express")

// Creamos la aplicacion de express
const app = express()

// Definimos las rutas
// Ruta raiz / home
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido" })
})

// QUERY PARAMS
app.get("/users", (req, res) => {
  const limite = req.query.limite
  const nombre = req.query.nombre

  res.json({ message: "Lista de usuarios", limite, nombre })
})

// URL PARAMS
app.get("/users/:id", (req, res) => {
  const id = req.params.id
  const limite = req.query.limite

  res.json({ message: "Informacion del usuario: ", id, limite })
})

app.post("/users", (req, res) => {
  res.status(201).json({ message: "Usuario creado" })
})

app.put("/users/:id", (req, res) => {
  const id = req.params.id
  res.json({ message: "Usuario actualizado", id })
})

app.delete("/users/:id", (req, res) => {
  const id = req.params.id
  res.json({ message: "Usuario eliminado", id })
})

// Iniciamos el servidor
app.listen(8080, () => {
  console.log("Servidor escuchando en http://localhost:8080")
})
