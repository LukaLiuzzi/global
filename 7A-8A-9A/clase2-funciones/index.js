// Parametros con valores por defecto

function saludar(nombre = "Desconocido", saludo = "Hola nuevamente!") {
  return `${saludo} ${nombre}`
}

console.log(saludar("Carlos", "Que gusto verte!"))
console.log(saludar(undefined, "Que gusto verte!")) // undefined es para que tome el valor por defecto

function suma(num1, num2 = 0) {
  return num1 + num2
}

console.log(suma(1, 2))
console.log(suma(1))

// Parametros rest (...)
function sumar(...numeros) {
  let resultado = 0
  for (let numero of numeros) {
    resultado += numero
  }
  return resultado
}

console.log(sumar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
console.log(sumar(1, 2, 3, 4, 5, 6, 7, 8, 9, 100))

// Practica
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true
  } else {
    return false
  }
}

if (esMayorDeEdad(25)) {
  console.log("Es mayor de edad")
} else {
  console.log("Es menor de edad")
}

function duplicarEdad(persona) {
  return {
    ...persona,
    edad: persona.edad * 2,
  }
}

const persona = {
  nombre: "Carlos",
  edad: 25,
}

const personaDuplicada = duplicarEdad(persona)

console.log(personaDuplicada)

ejemploHoisting()

function ejemploHoisting() {
  console.log("Hola mundo!")
}

/*
Hoisting - Elevacion
Es un termino que se usa para describir como JS mueve las declaraciones de funciones y variables al inicio del archivo al principio del codigo, de forma que las podes usar antes de haberlas declarado
*/

// Function expression - Expresion de funcion (Funcion anonima)
const operacion = function (a, b) {
  console.log(a + b)
}

operacion(1, 2)

// Arrow functions - Funciones flecha
// Ventajas
// 1. No hace falta escribir la palabra function
// 2. Si la funcion solo tiene una linea de codigo, no hace falta escribir la palabra return
// 3. Si la funcion solo tiene un parametro, no hace falta escribir los parentesis
// 4. Si la funcion solo tiene una linea de codigo, no hace falta escribir las llaves

// 1
const restar = (num1, num2) => {
  console.log(num1 - num2)
}

restar(2, 1)

// 2 y 4
const multiplicar = (num1, num2) => num1 * num2
console.log(multiplicar(2, 2))

// 3
const dividirPorDos = (numero) => numero / 2

console.log(dividirPorDos(10))

/**
 * Diferencias:
 * Las declaraciones de funciones se elevan al inicio del archivo (hoisting), por lo que podemos ejecutarlas antes de declararlas. El resto de las funciones no.
 * Las funciones expresadas tienen una sintaxis distinta a las funciones declaradas.
 * Las funciones flecha tienen una sintaxis mas clara, no tienen hoisting, pueden ser de una sola linea con return implicito y no cambia el valor de this.
 */
