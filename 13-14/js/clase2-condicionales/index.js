// true => verdadero
// false => falso

// Operadores de comparacion => Devuelven un booleano
// > Mayor que
// < Menor que
// >= Mayor o igual que
// <= Menor o igual que
// == Igual que => Comparar 2 valores y que sean iguales
// === Estrictamente igual que => Comparar 2 valores, que sean iguales y que sean del mismo tipo
// != Distinto que => Comparar 2 valores y que sean distintos
// !== Estrictamente distinto que => Comparar 2 valores, que sean distintos y que sean de distinto tipo

// console.log(10 > 5) // true
// console.log(10 < 5) // false
// console.log(10 == 5) // false
// console.log(10 == 10) // true
// console.log(10 != 10) // false
// console.log(10 != 5) // true
// console.log(10 == "10") // true
// console.log(10 === "10") // false
// console.log(10 != "10") // false
// console.log(10 !== "10") // true

// Condicionales
// if (condicion) {
// Codigo a ejecutar si la condicion es verdadera
//} else {
// Codigo a ejecutar si la condicion es falsa
//}

// const edad = prompt("Ingresa tu edad")

// if (edad > 17) {
//   alert("Podes ingresar al sitio")
// } else {
//   alert("No podes ingresar al sitio porque sos menor de edad")
// }

// const nota = prompt("Ingresa la nota del alumno")

// if (nota >= 7) {
//   alert("El alumno esta aprobado")
// } else if (nota > 4) {
//   alert("El alumno esta en recuperatorio")
// } else if (nota > 1) {
//   alert("El alumno esta desaprobado")
// } else {
//   alert("La nota es invalida")
// }

// Variables booleanas
// const bool = 10 > 5

// if (bool) {
//   console.log("Es verdadero")
// } else {
//   console.log("Es falso")
// }

// Operadores logicos
// && => AND
// || => OR
// ! => NOT
// ?? => Nullish Coalescing Operator

const condicionAND = 10 < 5 && 5 > 3
console.log(condicionAND)

const condicionOR = 10 < 5 || 5 < 3
console.log(condicionOR)

// AND => Si todas las condiciones son verdaderas, el resultado es verdadero, sino es falso
// true && true => true
// true && false => false
// false && true => false
// false && false => false

// OR => Si alguna de las condiciones es verdadera, el resultado es verdadero, sino es falso
// true || true => true
// true || false => true
// false || true => true
// false || false => false

// NOT
// !true => false => not true => false
// !false => true => not false => true
// const boolean = !false
// console.log(boolean)

// EJERCICIO
/**
 * Crea un algoritmo que solicite al usuario uno o más valores ingresados por prompt(), compare las entradas y, en función de ciertas condiciones, muestre por consola o alert() el resultado según los valores ingresados y las condiciones cumplidas.
 *
 * Tener en cuenta que los valores obtenidos por prompt() son string, si se busca operar con números hay que parsearlos antes y si van a usar cadenas recordar tener cuidado con mayúsculas y minúsculas en las comparaciones de igualdad. (Ej. “Hola” y “HOLA” no son iguales)
 * Para parsear un string a un numero pueden usar Number("6")
 * 
 * Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.
Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.
Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.
 */
// const numero = Number("6")

let temperaturaCorporal = prompt("ingrese su temperatura corporal ")

// if parseInt(temperaturaCorporal) > 37 alert('tienes fiebre') && <40
// else alert('no tienes fiebre')
if (parseInt(temperaturaCorporal) > 37 && parseInt(temperaturaCorporal) < 40) {
  alert("tienes fiebre")
} else {
  alert("no tienes fiebre")
}
