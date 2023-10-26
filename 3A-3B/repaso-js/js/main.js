// Clase de Producto
class Producto {
  constructor(id, nombre, imagen, precio, equipo) {
    this.id = id
    this.nombre = nombre
    this.imagen = imagen
    this.precio = precio
    this.equipo = equipo
  }
}

// Creacion de variables para los productos y el carrito
const productosTiendaBS = []
let carrito = []

// Leer los datos con fetch
const getDBProductosJSON = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()

    data.forEach((producto) => {
      productosTiendaBS.push(
        new Producto(
          producto.id,
          producto.nombre,
          producto.imagen,
          producto.precio,
          producto.equipo
        )
      )
    })
  } catch (error) {
    console.log(error)
  }
}

// Capturar los nodos del html
const productosItems = document.querySelector("#productos-items")
const productosCarrito = document.querySelector("#productos-carrito")
const productosPrecioTotal = document.querySelector("#productos-precio-total")
const productosVaciarCarrito = document.querySelector("#productos-btn-vaciar")
const productosComprarCarrito = document.querySelector("#productos-btn-comprar")

// Evento de vaciar el carrito
productosVaciarCarrito.addEventListener("click", vaciarCarrito)

// Agregamos los productos al DOM
function mostrarProductosDom(arr) {
  // Esta funcion se encarga de mostrar los productos en el DOM
  productosItems.innerHTML = ""
  let html

  arr.forEach((item) => {
    const { id, nombre, imagen, precio } = item

    html = `
    <div class="col-10 col-sm-6 col-md-4 col-xl-3 p-4 d-flex align-items-stretch">
			<div class="productos-card">
                <img src="../images/productos/${imagen}" alt="${nombre}" width="100%" class="img-fluid"/>
                <div class="productos-cardDatos">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="card-text">$${precio}</p>
                    <button onclick="agregarAlCarrito(${id});" class="btnAgregar"><i class="bi bi-cart"></i>  Agregar al carrito</button>                    
                </div>
			</div>
		</div>
    `

    productosItems.innerHTML += html
  })
}

function agregarAlCarrito(id) {
  // Esta funcion se encarga de agregar los productos al carrito
  carrito.push(id) // Agregamos el id del producto al carrito
  funActCarrito() // Actualizamos el carrito
  funSaveCarritoLS() // Guardamos el carrito en el LocalStorage

  Toastify({
    text: "Producto agregado al carrito",
    duration: 2000,
    offset: { y: 120 },
    style: {
      background: "linear-gradient(to right, #006878, #009878)",
    },
  }).showToast()
}

// Modificamos el DOM para hacer la estructura del carrito
function funActCarrito() {
  productosCarrito.innerHTML = ""

  if (carrito && carrito.length > 0) {
    // Chequeamos si el carrito tiene al menos 1 producto
    productosComprarCarrito.classList.remove("hidden") // Mostramos el boton de comprar
    productosVaciarCarrito.classList.remove("hidden") // Mostramos el boton de vaciar
    let html

    const carritoSinDuplicados = [...new Set(carrito)] // Eliminamos los duplicados

    carritoSinDuplicados.forEach((item) => {
      // Por cada producto en el carrito creamos un nodo
      const miItem = productosTiendaBS.filter((itemBaseDatos) => {
        return itemBaseDatos.id === parseInt(item)
      })

      // Contamos el numero de unidades que hay de cada producto
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
        return itemId === item ? (total += 1) : total
      }, 0)

      // Renderizamos el producto en el carrito
      html = `
      <div class="info-cart-product">
      <p class="cantidad-producto-carrito fs-6 mb-0">${numeroUnidadesItem}</p>
        <img src="../images/productos/${miItem[0].imagen}" alt="${miItem[0].nombre}" class="imagen-producto-carrito"/>
        <p class="titulo-producto-carrito fs-6 mb-0">${miItem[0].nombre}</p>
        <p class="precio-producto-carrito fs-6 mb-0">$${miItem[0].precio}</p>
        <button onclick="borrarItemCarrito(${miItem[0].id});" class="btnBorrar">X</button>
        </div>
        `

      productosCarrito.innerHTML += html
    })
  } else {
    // Si el carrito esta vacio
    productosComprarCarrito.classList.add("hidden") // Ocultamos el boton de comprar
    productosVaciarCarrito.classList.add("hidden") // Ocultamos el boton de vaciar
    // Creamos un nodo con el mensaje de que el carrito esta vacio
    html = `
    <div class="info-cart-product">
			<div class=".productos-cardDatos">
                <h5>El carrito se encuentra vacío</h5>
			</div>
        </div>
        `

    productosCarrito.innerHTML = html
  }
  // Calculamos el precio total
  productosPrecioTotal.innerHTML = calcularTotal()
}

function borrarItemCarrito(id) {
  // Borramos el producto con el id que nos llega por parametro
  carrito = carrito.filter((idProducto) => {
    return idProducto !== id
  })

  // Actualizamos el HTML y el LocalStorage
  funActCarrito()
  funSaveCarritoLS()

  Toastify({
    text: "Producto eliminado del carrito",
    duration: 2000,
    offset: { y: 120 },
    style: {
      background: "linear-gradient(to right, #006878, #009878)",
    },
  }).showToast()
}

// Funcion para calcular el total
function calcularTotal() {
  return carrito
    .reduce((total, item) => {
      const miItem = productosTiendaBS.filter((itemBaseDatos) => {
        return itemBaseDatos.id === parseInt(item)
      })
      return total + miItem[0].precio
    }, 0)
    .toFixed(2)
}

function vaciarCarrito() {
  // Vaciamos el carrito
  carrito = []

  // Actualizamos el HTML y el LocalStorage
  funActCarrito()
  funSaveCarritoLS()

  Toastify({
    text: "Carrito vaciado",
    duration: 2000,
    offset: { y: 120 },
    style: {
      background: "linear-gradient(to right, #006878, #009878)",
    },
  }).showToast()
}

function funSaveCarritoLS() {
  // Guardamos el carrito en el LocalStorage
  window.localStorage.setItem("carrito", JSON.stringify(carrito))
}

// Funcion para cargar el carrito desde el LocalStorage
function funUploadCarritoLS() {
  if (window.localStorage.getItem("carrito") !== null) {
    carrito = JSON.parse(window.localStorage.getItem("carrito"))
  }
}

function filtrarProductos(arr, filtro) {
  if (filtro !== "Todos") {
    const productosFiltrados = arr.filter(
      (producto) => producto.equipo === filtro
    )
    mostrarProductosDom(productosFiltrados)
  } else {
    mostrarProductosDom(arr)
  }
}

const filterBoston = document.querySelector("#filter-bc")
const filterChicago = document.querySelector("#filter-cb")
const filterLakers = document.querySelector("#filter-la")
const filterSpurs = document.querySelector("#filter-sa")
const filterWarriors = document.querySelector("#filter-gs")
const filterTodos = document.querySelector("#filter-todos")

filterBoston.addEventListener("click", () => {
  filterTodos.checked = false
  filterBoston.checked = true
  filterChicago.checked = false
  filterLakers.checked = false
  filterSpurs.checked = false
  filterWarriors.checked = false
  filtrarProductos(productosTiendaBS, "Boston")
})

filterChicago.addEventListener("click", () => {
  filterTodos.checked = false
  filterBoston.checked = false
  filterChicago.checked = true
  filterLakers.checked = false
  filterSpurs.checked = false
  filterWarriors.checked = false
  filtrarProductos(productosTiendaBS, "Chicago")
})

filterLakers.addEventListener("click", () => {
  filterTodos.checked = false
  filterBoston.checked = false
  filterChicago.checked = false
  filterLakers.checked = true
  filterSpurs.checked = false
  filterWarriors.checked = false
  filtrarProductos(productosTiendaBS, "Lakers")
})

filterSpurs.addEventListener("click", () => {
  filterTodos.checked = false
  filterBoston.checked = false
  filterChicago.checked = false
  filterLakers.checked = false
  filterSpurs.checked = true
  filterWarriors.checked = false
  filtrarProductos(productosTiendaBS, "Spurs")
})

filterWarriors.addEventListener("click", () => {
  filterTodos.checked = false
  filterBoston.checked = false
  filterChicago.checked = false
  filterLakers.checked = false
  filterSpurs.checked = false
  filterWarriors.checked = true
  filtrarProductos(productosTiendaBS, "Warriors")
})

filterTodos.addEventListener("click", () => {
  filterBoston.checked = false
  filterChicago.checked = false
  filterLakers.checked = false
  filterSpurs.checked = false
  filterWarriors.checked = false
  filtrarProductos(productosTiendaBS, "Todos")
})

const main = async () => {
  await getDBProductosJSON("../db/dbProductos.json")
  mostrarProductosDom(productosTiendaBS)
  funUploadCarritoLS()
  funActCarrito()
}

main()
