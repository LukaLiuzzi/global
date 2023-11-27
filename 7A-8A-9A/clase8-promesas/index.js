// Promesas
const eventoAFuturo = (dato) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dato) {
        resolve("El dato es verdadero")
      } else {
        reject("El dato es falso")
      }
    }, 2000)
  })
}

// console.log(eventoAFuturo(false)) // pending

// then y catch

// eventoAFuturo(true).then((res) => {
//   console.log(`El resultado de la promesa es: ${res}`)
// })

// eventoAFuturo(false).catch((error) => {
//   console.log(`El resultado de la promesa es: ${error}`)
// })

// eventoAFuturo(false)
//   .then((res) => {
//     console.log(`El resultado de la promesa es: ${res}`)
//   })
//   .catch((error) => {
//     console.log(`El resultado de la promesa es: ${error}`)
//   })

// finally
eventoAFuturo(true)
  .then((res) => {
    console.log(`El resultado de la promesa es: ${res}`)
  })
  .catch((error) => {
    console.log(`El resultado de la promesa es: ${error}`)
  })
  .finally(() => {
    console.log("Se terminó la promesa")
  })

// Practica con promesas
// Nuestra base de datos
const BD = [
  { id: 1, nombre: "Producto 1", precio: 1500 },
  { id: 2, nombre: "Producto 2", precio: 2500 },
  { id: 3, nombre: "Producto 3", precio: 3500 },
  { id: 4, nombre: "Producto 4", precio: 3500 },
]

// Iniciamos un array de productos vacio y capturamos el div donde vamos a renderizar los productos
let productos = []
const divProductos = document.getElementById("productos")

// Creamos una función que simula una petición a una base de datos
const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(BD)
    }, 1500)
  })
}

// Creamos una función que renderiza los productos en el div
const renderizarProductos = (productos) => {
  if (productos.length === 0) {
    divProductos.innerHTML = `<h2>Cargando...</h2>`
    return
  }
  divProductos.innerHTML = ""
  productos.forEach((producto) => {
    divProductos.innerHTML += `
      <div style="border: 1px solid black; padding: 10px; margin: 10px; background-color: #eee" id="producto-${producto.id}">
        <h2>${producto.nombre}</h2>
        <p>Precio: ${producto.precio}</p>
      </div>
    `
  })
}

// Ejectuamos la función para renderizar los productos
renderizarProductos(productos)

// Ejecutamos la función que simula la petición a la base de datos
pedirProductos().then((res) => {
  productos = res
  renderizarProductos(productos)
})
