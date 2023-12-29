// SWITCH
//switch (condicion) {
//case "caso":
// codigo a ejecutar
// break
//case "caso2":
// codigo a ejecutar
// break
// default:
// codigo a ejecutar
// break
// }

// const nombre = prompt("Ingrese su nombre")

// switch (nombre) {
//   case "Luka":
//     console.log("Hola Luka")
//     break
//   case "Juan":
//     console.log("Hola Juan")
//     break
//   case "Pedro":
//     console.log("Hola Pedro")
//     break
//   default:
//     console.log("Hola desconocido")
//     break
// }

// if (nombre === "Luka") {
//   console.log("Hola Luka")
// } else if (nombre === "Juan") {
//   console.log("Hola Juan")
// } else if (nombre === "Pedro") {
//   console.log("Hola Pedro")
// } else {
//   console.log("Hola desconocido")
// }

// FUNCIONES
// function nombreFuncion(parametros) {
//   codigo a ejecutar
// }
// nombreFuncion(argumentos)

// function saludar() {
//   console.log("Hola")
//   console.log("Desde mi primera funcion")
// }

// console.log("Hola desde fuera de la funcion")

// saludar()

// function restar(a, b) {
//   console.log(a - b)
// }

// restar(10, 5)
// restar(5, 10)
// restar(18, 10)

// let resultado = 0
// function calculadora(num1, num2, op) {
//   switch (op) {
//     case "+":
//       resultado = num1 + num2
//       console.log(resultado)
//       break
//     case "-":
//       resultado = num1 - num2
//       console.log(resultado)
//       break
//     case "*":
//       resultado = num1 * num2
//       console.log(resultado)
//       break
//     case "/":
//       resultado = num1 / num2
//       console.log(resultado)
//       break

//     default:
//       console.log("Operacion no valida")
//       break
//   }
// }

// calculadora(10, 5, "+")
// calculadora(20, 5, "+")
// calculadora(340, 5, "+")
// calculadora(10, 5, "-")
// calculadora(10, 5, "*")
// calculadora(10, 5, "/")

// RETURN
// function calculadora(num1, num2, op) {
//   switch (op) {
//     case "+":
//       return num1 + num2
//     case "-":
//       return num1 - num2
//     case "*":
//       return num1 * num2
//     case "/":
//       return num1 / num2
//   }
// }

// function saludar(nombre) {
//   return `Hola ${nombre}`
// }

// const resultadoSuma = calculadora(10, 4, "+")
// console.log(resultadoSuma)
// const resultadoResta = calculadora(10, 4, "-")
// console.log(resultadoResta)

// const saludo = saludar("Luka")
// console.log(saludo)

// console.log(resultadoSuma + 10)
// console.log(resultadoResta + 10)
// console.log(saludo + 10)

function login(email, password) {
  if (!email || !password) {
    console.log("Faltan datos")
    return false
  }

  if (password.length < 4) {
    console.log("La contraseña es muy corta")
    return false
  }

  if (email == "luka@luka.com" && password == "1234") {
    return true
  }

  return false
}

const logueado = login("luka@luka.com", "1234")
// logueado = false

if (logueado) {
  console.log("Bienvenido!!!")
} else {
  console.log("No te pudiste loguear, intenta nuevamente")
}
