// Nuestra primer función
// palabra reservada function => nombreFunciona => () => {}
// function saludar() {
//   // Codigo a ejecutar
//   console.log("Hola soy una funcion")
//   console.log("Soy otro console log dentro de la funcion")

//   console.log(1 + 10)

//   const usuarios = []

//   usuarios.push("Luka")

//   console.log(usuarios)
// }

// saludar()

// PARAMETROS - Los parametros nos permiten que una funcion se comporte de diferente manera segun estas "variables" que nos van a llegar desde fuera de la funcion.
function saludar(nombre) {
  console.log("Hola " + nombre)
}

// ARGUMENTOS -  Valores que queremos pasar a la función como argumentos. Estos valores deben coincidir en número y orden con los parámetros definidos al crear la función.
saludar("Luka") // <-- La estamos ejecutando
saludar("Jessica") // <-- La estamos ejecutando
saludar("Carlos") // <-- La estamos ejecutando

function sumar(numero1, numero2) {
  console.log(numero1 + numero2)
}

const numero1 = 10
const numero2 = 20

sumar(numero1, numero2)

// Es muy importante respetar el orden de los parametros

// return - Las funciones pueden o no retornar un valor. Se entiende por retornar un valor, extraer un valor desde la funcion hacia afuera de la funcion.

function restar(numero1, numero2) {
  return numero1 - numero2
}

const resultado = restar(10, 6)

console.log(resultado)

// Cuando se ejecuta la palabra reservada return en una funcion, se sale de la funcion por lo que el codigo que esta abajo ya no se ejecuta.

function calculadora(numero1, numero2, operacion) {
  if (operacion == "+") {
    return numero1 + numero2
  } else if (operacion == "-") {
    return numero1 - numero2
  } else {
    return "La operacion no es valida"
  }
}

const resultado2 = calculadora(10, 5, "dfjbdg")

console.log(resultado2)
