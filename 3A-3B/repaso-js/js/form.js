class Producto {
  constructor(id, nombre, imagen, precio) {
    this.id = id
    this.nombre = nombre
    this.imagen = imagen
    this.precio = parseFloat(precio)
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
          producto.precio
        )
      )
    })
  } catch (error) {
    console.log(error)
  }
}

// Capturar los nodos del html
const productosCarrito = document.querySelector("#productos-carrito")
const productosPrecioTotal = document.querySelector("#productos-precio-total")
const productosCarritoSeleccionados = document.querySelector(
  "#productos-items-seleccionados"
)
const confirmarCompra = document.querySelector("#btnComprar")

confirmarCompra.addEventListener("click", verificarFormulario)

function funActCarrito() {
  let html
  productosCarritoSeleccionados.innerHTML = ""
  if (carrito && carrito.length > 0) {
    const carritoSinDuplicados = [...new Set(carrito)]
    carritoSinDuplicados.forEach((item) => {
      const miItem = productosTiendaBS.filter((itemBaseDatos) => {
        return itemBaseDatos.id === parseInt(item)
      })

      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
        return itemId === item ? (total += 1) : total
      }, 0)
      html = `
            <div class="info-cart-product">
                <p class="cantidad-producto-carrito fs-6 mb-0">${numeroUnidadesItem}</p>
                <img src="../images/productos/${miItem[0].imagen}" alt="${miItem[0].nombre}" class="imagen-producto-carrito"/>
                <p class="titulo-producto-carrito fs-6 mb-0">${miItem[0].nombre}</p>
                <p class="precio-producto-carrito fs-6 mb-0">$${miItem[0].precio}</p>
            </div>
            `
      productosCarritoSeleccionados.innerHTML += html
    })
  } else {
    html = `
        <div class="info-cart-product">
			<div class=".productos-cardDatos">
                <h5>El carrito se encuentra vacío</h5>
			</div>
        </div>
        `
    productosCarritoSeleccionados.innerHTML = html
  }

  //Precio Total
  productosPrecioTotal.innerHTML = calcularTotal()
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

function confirmaCompra() {
  Toastify({
    text: "Compra realizada con exito!",
    duration: 2000,
    offset: { y: 120 },
    style: {
      background: "linear-gradient(to right, #006878, #009878)",
    },
  }).showToast()
  carrito = []
  window.localStorage.setItem("carrito", JSON.stringify(carrito))
  funActCarrito()

  setTimeout(() => {
    window.location.href = "/pages/productos.html"
  }, 3000)
}

function funUploadCarritoLS() {
  if (window.localStorage.getItem("carrito") !== null) {
    carrito = JSON.parse(window.localStorage.getItem("carrito"))
  }
}

function verificarFormulario() {
  const nombre = document.querySelector("#form-nombre").value
  const apellido = document.querySelector("#form-apellido").value
  const email = document.querySelector("#form-correo").value
  const telefono = document.querySelector("#form-telefono").value

  if (nombre === "" || apellido === "" || email === "" || telefono === "") {
    Toastify({
      text: "Por favor complete todos los campos",
      duration: 2000,
      offset: { y: 120 },
      style: {
        background: "linear-gradient(to right, #006878, #009878)",
      },
    }).showToast()
  } else {
    confirmaCompra()
  }
}

const main = async () => {
  await getDBProductosJSON("../db/dbProductos.json")
  funUploadCarritoLS()
  funActCarrito()
}

main()
