// DOM: Document Object Model => Es una representacion jerarquica de la estructura de un documento HTML. Permite a javascript acceder y manipular elementos HTML, asi como responder a eventos de la pagina.

// Seleccion de elementos:
// document.getElementById('id') => Devuelve un elemento HTML con el id especificado.
// document.getElementsByClassName('class') => Devuelve una coleccion de elementos HTML con la clase especificada.
// document.getElementsByTagName('tag') => Devuelve una coleccion de elementos HTML con el tag especificado.
// document.querySelector('selector') => Devuelve el primer elemento que coincida con el selector especificado.
// document.querySelectorAll('selector') => Devuelve todos los elementos que coincidan con el selector especificado.

console.dir(document) // Muestra el objeto document en la consola
document.title = "Aprendiendo DOM"

// Capturamos los elementos del DOM
const titulo = document.querySelector("h1")
const subtitulo = document.querySelector(".subtitulo")
const dato = document.getElementById("dato")
const img = document.querySelector("img")
const parrafos = document.querySelectorAll("p")

// Modificamos el valor de un elemento usando textContent / innerText / innerHTML
titulo.textContent = "Aprendiendo a modificar el valor de un elemento HTML"

// Modificamos los estilos de un elemento usando style
// font-weight
// fontWeight
subtitulo.style.fontWeight = "bold"
subtitulo.style.color = "red"
subtitulo.style.backgroundColor = "blue"

// Modificamos los estilos de la etiqueta body
document.body.style.backgroundColor = "lightgray"

// Modificamos las clases de un elemento usando classList
dato.classList.add("js") // Agrega una clase
dato.classList.remove("dato") // Remueve una clase
dato.classList.toggle("dato") // Agrega o remueve una clase segun su estado actual

// Modificamos los atributos de un elemento usando setAttribute / getAttribute
// https://estaticos-cdn.sport.es/clip/96e3800b-93b4-4687-9dcb-470022f3f949_alta-libre-aspect-ratio_default_0.jpg

img.setAttribute(
  "src",
  "https://estaticos-cdn.sport.es/clip/96e3800b-93b4-4687-9dcb-470022f3f949_alta-libre-aspect-ratio_default_0.jpg"
) // Agrega un atributo

const alt = img.getAttribute("alt") // Obtiene el valor de un atributo

if (alt === "Futbol") {
  img.setAttribute("alt", "Pelota")
}

img.setAttribute("data-id", "1")
