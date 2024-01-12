// ARRAYS
const arrayVacio = []

const arrayNumeros = [1, 2, 3, 4, 5]

const arrayStrings = ["hola", "mundo", "chau"]

const arrayBooleanos = [true, false, true, false]

const arrayMix = [1, "hola", true, 2, "chau", false] // NO RECOMENDADO

const arrayArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const arrayObjetos = [
  { nombre: "Juan", edad: 20 },
  { nombre: "Pedro", edad: 30 },
  { nombre: "Maria", edad: 40 },
]

// Acceder a un elemento del array
const numeros = [1, 2, 3, 4, 5, 6]
const strings = ["Luka", "Lisandro", "Marcelo", "Vanesa"]
console.log(strings[2])

// Iteracion de un array
for (let i = 0; i < strings.length; i++) {
  console.log(strings[i])
}

// Metodos y propiedades de los arrays
// length - devuelve la cantidad de elementos del array
console.log("LONGITUD:", strings.length)

// push - agrega un elemento al final del array
strings.push("Juan")
console.log(strings)

// pop - elimina el ultimo elemento del array
strings.pop()
console.log(strings)

// unshift - agrega un elemento al principio del array
strings.unshift("Juan")
console.log(strings)

// shift - elimina el primer elemento del array
strings.shift()
console.log(strings)

// splice - elimina elementos del array
// const numeros = [1, 2, 3, 4, 5, 6]
numeros.splice(2, 3)
console.log(numeros)

// join - convierte un array en un string
console.log("Los mejores alumnos son: " + strings.join(", "))

// concat - concatena dos arrays
const perros = ["Lobo", "Toby", "Luna"]
const gatos = ["Michi", "Mishi", "Mishu"]
const mascotas = perros.concat(gatos)
console.log(mascotas)

// slice - devuelve una copia de una parte del array
const masculinos = strings.slice(0, 3)
console.log(masculinos)

// indexOf - devuelve la posicion de un elemento del array
const nombres = ["Juan", "Pedro", "Maria", "Pedro"]
console.log(nombres.indexOf("Maria"))

// includes - devuelve true o false si el elemento existe en el array
console.log(nombres.includes("Maria"))
console.log(nombres.includes("Luka"))

// reverse - invierte el orden de los elementos del array
console.log(nombres.reverse())

// Practica
const listaNombres = []

while (true) {
  let nombre = prompt("Ingrese un nombre")
  if (nombre === "") {
    break
  }
  listaNombres.push(nombre)
}

alert("Los nombres ingresados son: " + listaNombres.join(", "))

const eliminar = prompt("Desea eliminar algun nombre? (si/no)")
if (eliminar === "si") {
  const nombreEliminar = prompt("Ingrese el nombre que quiere eliminar")
  const indice = listaNombres.indexOf(nombreEliminar)
  if (indice !== -1) {
    listaNombres.splice(indice, 1)
    alert("Los nombres ingresados son: " + listaNombres.join(", "))
    alert("El nombre fue eliminado")
  } else {
    alert("El nombre no existe")
  }
} else {
  alert("No se eliminaron nombres")
}
