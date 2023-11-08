// Eventos con formularios
const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const query = document.getElementById("query").value
  console.log("El formulario se envio con los siguientes datos!!")
  console.log("Nombre: ", name)
  console.log("Email: ", email)
  console.log("Consulta: ", query)
})

// Propagacion de eventos - Bubbling
const boton = document.getElementById("boton")
const contenedor = document.getElementById("contenedor")

boton.addEventListener("click", (e) => {
  alert("click en el boton")
  e.stopPropagation()
})

contenedor.addEventListener("click", (e) => {
  alert("click en el contenedor")
})

// Validaciones en formularios
const formRegistro = document.getElementById("form-registro")

formRegistro.addEventListener("submit", (e) => {
  e.preventDefault()

  // Capturamos los datos
  const name = document.getElementById("name-registro").value
  const email = document.getElementById("email-registro").value
  const age = document.getElementById("age-registro").value
  const password = document.getElementById("password-registro").value
  const confirmPassword = document.getElementById(
    "password-registro-confirmacion"
  ).value

  // Validaciones
  if (name === "") {
    alert("El nombre es obligatorio")
    return
  }

  if (email === "") {
    alert("El email es obligatorio")
    return
  }

  if (age === "") {
    alert("La edad es obligatoria")
    return
  }

  if (password === "") {
    alert("La contraseña es obligatoria")
    return
  }

  if (confirmPassword === "") {
    alert("La confirmacion de contraseña es obligatoria")
    return
  }

  if (isNaN(age)) {
    alert("La edad debe ser un numero")
    return
  }

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden")
    return
  }

  if (email.indexOf("@") === -1) {
    alert("El email debe tener un @")
    return
  }

  // Enviamos los datos
  console.log("El formulario se envio con los siguientes datos!!")
  console.log("Nombre: ", name)
  console.log("Email: ", email)
  console.log("Edad: ", age)
  console.log("Contraseña: ", password)
})
