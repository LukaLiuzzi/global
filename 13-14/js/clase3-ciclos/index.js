// BUCLES
// CICLOS POR CONTEO
// 1. FOR
// CICLOS CONDICIONALES
// 2. WHILE
// 3. DO WHILE

// FOR
// for(desde; hasta; actualizacion) {
//     Codigo a ejecutar
// }
// i => index => indice en ingles
// for (let indice = 0; indice < 10; indice++) {
//   console.log(indice)
// }

// let num = 3
// num = num + 1
// num += 1
// num++
// console.log(num)

// const numeroUsuario = Number(prompt("Ingrese un numero"))

// for (let i = 1; i <= 10; i++) {
//   const resultado = numeroUsuario * i
//   console.log(numeroUsuario + " x " + i + " = " + resultado)
// }

// for (let i = 1; i <= 20; i++) {
//   const nombreUsuario = prompt("Ingrese su nombre")

//   console.log("Turno N° " + i + " Nombre: " + nombreUsuario)
// }

// break => corta el ciclo
// for (let i = 1; i <= 10; i++) {
//   console.log(i)
//   if (i === 5) {
//     break
//   }
// }

// continue => salta la iteracion
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     continue
//   }
//   console.log(i)
// }

// WHILE
// while (condicion) {
//   codigo a ejecutar
//}

// let nombre = prompt("Ingrese el nombre del alumno")

// while (nombre !== "a") {
//   console.log("SOY EL WHILEEEEE")
//   let nota = Number(prompt("Ingrese la nota del alumno"))
//   console.log(nombre + " => " + nota)
//   nombre = prompt("Ingrese el nombre del alumno")
// }

// DO WHILE
// do {
//     codigo a ejecutar
// } while (condicion)

let nombre
do {
  nombre = prompt("Ingrese el nombre del alumno")
  let nota = Number(prompt("Ingrese la nota del alumno"))
  console.log(nombre + " => " + nota)
} while (nombre !== "a")
