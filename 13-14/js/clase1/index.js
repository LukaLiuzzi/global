// Reglas basicas
// Formas de comentar:
// Esto es un comentario de una sola linea

/*
 * Esto es un comentario
 * de varias lineas
 */

// No se tiene en cuenta los espacios en blanco y saltos de linea

// Es case sensitive: diferencia entre mayusculas y minusculas => luka es totalmente distinto a Luka

// Existen palabras reservadas por el lenguaje que no se pueden usar como nombres de variables, funciones, etc

// =====================================================
// Variables
// Es un espacio de memoria que se reserva para almacenar un valor

// Forma deprecada de declarar variables. deprecada = obsoleta
// ES5 => Ecmascript 5
// var nombre = "Luka"

// Forma actual de declarar variables
// ES6 => Ecmascript 6
let colorFavorito = "Azul"
const PI = 3.14
colorFavorito = "Amarillo" // Esto es valido
// PI = 3.15 // Esto no es valido
let nombre // Esto es valido
// const apellido // Esto no es valido

// camelCase => nombreDeVariable
// PascalCase => NombreDeVariable
// snake_case => nombre_de_variable
// kebab-case => nombre-de-variable
let nombreDeVariable
let edadPersona

// let -persona // Esto no es valido
// let 1persona // Esto no es valido
// let persona1 // Esto es valido

// =====================================================
// Tipos de datos mas comunes

// String => Cadena de caracteres
let nombreMio = "Luka" // => Comillas dobles
let nombreAmigo = "Juan" // => Comillas simples
let nombreProfesor = `Carlos` // => Comillas invertidas o backticks

// Number => Numeros
let edadMia = 21 // => Enteros
let edadAmiga = 22.5 // => Decimales
let edadAmigo = "22" // Esto es un string!!

// Boolean => true o false
let esMayorDeEdad = true // => true = verdadero
let estamosEn2030 = false // => false = falso
