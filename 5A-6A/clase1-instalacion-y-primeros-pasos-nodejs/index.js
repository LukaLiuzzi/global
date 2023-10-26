const os = require("node:os")
const fs = require("node:fs")

// Modulo OS: Nos permite acceder a información del sistema operativo
// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus())
// console.log(os.freemem())
// console.log(os.uptime())

// Modulo FS: Nos permite acceder a información del sistema de archivos
// Creamos un archivo de texto
// fs.writeFile(
//   "./nuestro-primer-archivo.txt",
//   "Hola mundo desde nodejs usando el module fs",
//   (error) => {
//     if (error) {
//       console.log("Error al crear el archivo")
//     } else {
//       console.log("El archivo fue creado correctamente")
//     }
//   }
// )

// Leemos el archivo de texto
fs.readFile(
  "./nuestro-primer-archivo.txt",
  {
    encoding: "utf-8",
  },
  (error, data) => {
    if (error) {
      console.log("Error al leer el archivo")
    } else {
      console.log(data)
    }
  }
)

// Elimitamos el archivo de texto
fs.unlink("./nuestro-primer-archivo.txt", (error) => {
  if (error) {
    console.log("Error al eliminar el archivo")
  } else {
    console.log("El archivo fue eliminado correctamente")
  }
})
