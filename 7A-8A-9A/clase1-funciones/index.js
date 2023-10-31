function saludar(nombre) {
  console.log(`Hola ${nombre}`)
}

saludar("Fernando")
saludar("Luka")

function calculadora(num1, num2, operacion) {
  if (operacion == "+") {
    return num1 + num2
  } else if (operacion == "-") {
    return num1 - num2
  } else {
    return "Operacion no valida"
  }
}

console.log(calculadora(2, 4, "+"))
console.log(calculadora(2, 4, "-"))

// Hoisting
prueba()
function prueba() {
  console.log("Hola")
}

// Function expression

// sumar(1, 2)
// const sumar = function (a, b) {
//   return a + b
// }

// console.log(sumar(1, 2))

// Arrow functions
// No se puede usar el hoisting
// Si hay 1 solo parametro se pueden omitir los parentesis
// Si la funcion solo tiene 1 linea se pueden omitir las llaves y el return
// No se puede usar el this

const sumar = (a, b) => {
  return a + b
}

console.log(sumar(1, 3))

// Recursividad - Funcion que se llama a si misma
console.clear()
function bomba(num) {
  // Condicion base - Corta la ejecucion de la funcion en algun momento
  if (num < 0) return

  console.log(num)

  bomba(num - 1)
}

bomba(10)

// Vamos a calcular el factorial de un numero usando recursividad
// El factorial de un numero es multiplicar ese numero por todos los numeros que le anteceden hasta llegar a 1
// Ej: El factorial de 10 es 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 3628800

const factorial = (num) => {
  // Condicion base - Corta la ejecucion de la funcion
  if (num === 0 || num === 1) {
    // Aca falta algo
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

console.log(factorial(0))

// DOM - Document Object Model
