// Seguimos con DOM. Agregamos elementos al DOM
// 1. Crear un elemento
// 2. Agregarle contenido
// 3. Agregarle atributos
// 4. Agregarlo al DOM

// 1. Crear un elemento
const h1 = document.createElement("h1")
// 2. Agregarle contenido
h1.textContent = "Este es el titulo de mi web"
// 3. Agregarle atributos
h1.setAttribute("class", "titulo")
// 4. Agregarlo al DOM
// document.body.appendChild(h1)
// Otro ejemplo
// const game = document.querySelector("#game")
const img = document.createElement("img")
img.setAttribute("src", "https://picsum.photos/200/300")
// game.appendChild(img)

// Eliminamos un elemento del DOM
// const parrafo = document.querySelector("p")

// setTimeout(() => {
//   parrafo.remove()
// }, 2000)

// EVENTOS
// 1. Seleccionar el elemento
// const imagen = document.querySelector("img")
// 2. Agregar el evento
// imagen.addEventListener("click", (e) => {
//   imagen.style.borderRadius = "50%"
//   imagen.style.transition = "all 1s ease"
//   imagen.style.transform = "rotate(360deg)"
// })

// Galeria de imagenes interactiva
/**
 * https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2020/03/492392.jpg
 * https://cdn.motor1.com/images/mgl/6ZZp9r/s3/most-expensive-cars-in-the-world-2022.jpg
 * https://www.infobae.com/new-resizer/7WPn0J30BXBWcZ49ADBkpStQYNY=/arc-anglerfish-arc2-prod-infobae/public/NNC7TA7K2NG5HM2REZSAE244XE.jpg
 * https://www.infobae.com/new-resizer/t9u69vxi5hgxkppiRKb6Zh6ZAhE=/1024x512/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/4GSUPRZXXREO7A3YKFIT3W2RMM.jpg
 * https://www.losandes.com.ar/resizer/Ds2SkEcm7CVa4TcJJyJ-w0eunSM=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/VT7JH3O4YVEG7LIE27BEYA5QZA.jpg
 */

// Creamos un diccionario para darle un indice a cada imagen
const imagenes = {
  1: "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2020/03/492392.jpg",
  2: "https://cdn.motor1.com/images/mgl/6ZZp9r/s3/most-expensive-cars-in-the-world-2022.jpg",
  3: "https://www.infobae.com/new-resizer/7WPn0J30BXBWcZ49ADBkpStQYNY=/arc-anglerfish-arc2-prod-infobae/public/NNC7TA7K2NG5HM2REZSAE244XE.jpg",
  4: "https://www.infobae.com/new-resizer/t9u69vxi5hgxkppiRKb6Zh6ZAhE=/1024x512/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/4GSUPRZXXREO7A3YKFIT3W2RMM.jpg",
  5: "https://www.losandes.com.ar/resizer/Ds2SkEcm7CVa4TcJJyJ-w0eunSM=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/VT7JH3O4YVEG7LIE27BEYA5QZA.jpg",
}

let imagenActual = 1
let totalImagenes = 5
// Creamos la funcion para cambiar la imagen
function cambiarImagen(incremento) {
  imagenActual += incremento
  if (imagenActual > totalImagenes) {
    imagenActual = 1
  }
  if (imagenActual < 1) {
    imagenActual = totalImagenes
  }
  const imagen = document.querySelector("#imagen")

  imagen.setAttribute("src", imagenes[imagenActual])
}

// Capturamos los botones
const botonAnterior = document.querySelector("#boton-anterior")
const botonSiguiente = document.querySelector("#boton-siguiente")

// Crear un evento para cada boton
botonAnterior.addEventListener("click", () => {
  cambiarImagen(-1)
})

botonSiguiente.addEventListener("click", () => {
  cambiarImagen(1)
})

// Crear un evento para la imagen
document.body.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    cambiarImagen(-1)
  }
  if (e.key === "ArrowRight") {
    cambiarImagen(1)
  }
})
