// COMMONJS
// const express = require("express")
// const { express } = require("express")
// ESMODULES
// import elQueQueramos from "./otroarchivo.js"
// import { mivariable } from "./otroarchivo.js"

// const mivariable = 1
// COMMONJS
// module.exports = express
// module.exports = { mivariable }
// ESMODULES
// export default mivariable
// export { mivariable }

// Creamos el servidor usando express
import express from "express"

const app = express()
const PORT = 8080

// Nuestro primer endpoint
app.get("/", (req, res) => {
  res.send("Hola mundo")
})

// Gestion basica de rutas y parametros de url
app.get("/about", (req, res) => {
  res.send("Estamos en about")
})
app.get("/users", (req, res) => {
  console.log(req.query)
  res.send("Lista de usuarios")
})
app.get("/users/:nombre", (req, res) => {
  console.log(req.params)
  res.send(`Informacion de ${req.params.nombre}`)
})

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en http://localhost:${PORT}`)
})

// URL PARAMS
// samsung-galaxy-a33-5g-128-gb-awesome-black-6-gb-ram
// QUERY PARAMS
// search?q=autos+usados&sca_esv=576993793&source=hp&ei=fPY6ZceyIqnB5OUP9c-m4QQ&iflsig=AO6bgOgAAAAAZTsEjOUo6rnoxW6xbn2ndsdeXPZJEGcq

// https://www.mercadolibre.com.ar/samsung-galaxy-a33-5g-128-gb-awesome-black-6-gb-ram/p/MLA19089054#polycard_client=recommendations_home_navigation-recommendations&reco_backend=machinalis-homes-pdp-boos&reco_client=home_navigation-recommendations&reco_item_pos=1&reco_backend_type=function&reco_id=13848b80-9e4e-476a-a527-5c06f5629afc

// https://www.google.com/search?q=autos+usados&sca_esv=576993793&source=hp&ei=fPY6ZceyIqnB5OUP9c-m4QQ&iflsig=AO6bgOgAAAAAZTsEjOUo6rnoxW6xbn2ndsdeXPZJEGcq&ved=0ahUKEwjH4Nic75SCAxWpILkGHfWnKUwQ4dUDCAo&uact=5&oq=autos+usados&gs_lp=Egdnd3Mtd2l6IgxhdXRvcyB1c2Fkb3MyCBAAGIAEGLEDMg4QABiABBixAxiDARjJAzIIEAAYigUYkgMyBRAAGIAEMgUQABiABDIFEAAYgAQyCBAAGIoFGLEDMgsQABiKBRixAxiDATILEAAYigUYsQMYgwEyCxAAGIoFGLEDGIMBSMYTUKEHWKcScAJ4AJABAJgBWqABjQeqAQIxM7gBA8gBAPgBAagCCsICEBAAGAMYjwEY5QIY6gIYjAPCAhAQLhgDGI8BGOUCGOoCGIwDwgIREC4YgAQYsQMYgwEYxwEY0QPCAgsQABiABBixAxiDAcICDhAuGIAEGLEDGMcBGNEDwgIFEC4YgATCAgsQLhiKBRixAxiDAcICCxAuGIAEGMcBGNEDwgILEC4YgAQYxwEYrwHCAgsQLhiABBixAxiDAcICChAAGIAEGLEDGArCAhAQABiABBixAxiDARjJAxgKwgIHEAAYgAQYCg&sclient=gws-wiz
