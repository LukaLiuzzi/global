// setTimeout - Es una funcion que permite realizar acciones asincronicamente. Recibe dos parametros, un callback y un valor numero en milisegundos.

// console.log("Inicio del programa")

// setTimeout(() => {
//   console.log("Mitad del programa")
// }, 0)

// console.log("Fin del programa")

const btn = document.querySelector("#boton")
const popup = document.querySelector("#popup-mensaje")

btn.addEventListener("click", () => {
  popup.classList.add("popup-active")

  const timeout = setTimeout(() => {
    popup.classList.remove("popup-active")
  }, 3000)

  clearTimeout(timeout)
})

// setInterval
let counter = 1
const intervalo = setInterval(() => {
  console.log("tic tac", counter)
  counter++
}, 1000)

// clearInterval - clearTimeOut => (linea 21)
setTimeout(() => {
  clearInterval(intervalo)
}, 2000)

let contador = 1

const sumarContador = () => {
  console.log("Contador", contador)
  contador++
}

let conteo = setInterval(sumarContador, 1000)

const boton = document.createElement("button")
boton.textContent = "Detener contador"
document.body.appendChild(boton)

boton.addEventListener("click", () => {
  clearInterval(conteo)
})

const botonPlay = document.createElement("button")
botonPlay.textContent = "Reproducir contador"
document.body.appendChild(botonPlay)

botonPlay.addEventListener("click", () => {
  conteo = setInterval(sumarContador, 1000)
})

const botonReiniciar = document.createElement("button")
botonReiniciar.textContent = "Reiniciar contador"
document.body.appendChild(botonReiniciar)

botonReiniciar.addEventListener("click", () => {
  contador = 0
})

// Promesas
clearInterval(conteo)
clearInterval(intervalo)
const eventoFuturo = (res) => {
  return new Promise((resolve, reject) => {
    if (res === true) {
      resolve("El evento se realizo con exito")
    } else {
      reject("El evento no se pudo realizar")
    }
  })
}

console.log(eventoFuturo(true))
console.log(eventoFuturo(false))
