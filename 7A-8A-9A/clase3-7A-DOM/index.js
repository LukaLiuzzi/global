/**
 * Capturando elementos del DOM
 * document.getElementById('id') - devuelve un elemento capturado por su id
 *
 * document.getElementsByClassName('class) - devuelve un conjunto de elementos capturados por su clase
 *
 * document.getElementsByTagName('tag') - devuelve un conjunto de elementos capturados por su etiqueta
 *
 * document.querySelector('selector') - devuelve el primer elemento capturado por el selector css
 *
 * document.querySelectorAll('selector') - devuelve un conjunto de elementos capturados por el selector css
 */

const subtitulo = document.getElementById("subtitulo")
const parrafos = document.getElementsByClassName("parrafo")
const etiquetasP = document.getElementsByTagName("p")
const tituloConSelector = document.querySelector("h1")
const parrafosConSelector = document.querySelectorAll(".parrafo")

/**
 * Modificando los elementos del dom - innerHTML - innerText - textContent
 */
setTimeout(() => {
  tituloConSelector.innerHTML = "Titulo modificado con innerHTML"
}, 1500)

/**
 * Modificando los estilos del dom
 * background-color -> backgroundColor
 */
const randomColor = () => {
  return Math.floor(Math.random() * 255)
}

const cambiarColor = () => {
  const color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
  document.body.style.backgroundColor = color
}

const cambiarEstilos = () => {
  subtitulo.style.backgroundColor = "red"
  subtitulo.style.color = "white"
  subtitulo.style.padding = "10px"
  subtitulo.style.borderRadius = "10px"
  tituloConSelector.style.backgroundColor = "blue"
  tituloConSelector.style.color = "white"
  tituloConSelector.style.padding = "10px"
  tituloConSelector.style.borderRadius = "10px"
}

setInterval(cambiarColor, 2000)
setTimeout(cambiarEstilos, 3000)

const enlace = document.querySelector("a")
const imagen = document.querySelector("img")

console.log(enlace.getAttribute("href"))
console.log(imagen.getAttribute("src"))
setTimeout(() => {
  imagen.setAttribute(
    "src",
    "https://tvazteca.brightspotcdn.com/38/e6/7b33cdd042d5a378d56a7f81fa73/perritos-primeros-auxilios.jpg"
  )
  enlace.setAttribute("href", "https://www.youtube.com")
  console.log(enlace.getAttribute("href"))
  console.log(imagen.getAttribute("src"))
}, 5000)

const boton = document.querySelector("button")

boton.addEventListener("click", () => {
  document.body.innerText = ""
})
