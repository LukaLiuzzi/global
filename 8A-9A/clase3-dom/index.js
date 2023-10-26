document.body.style.backgroundColor = "lightgray"

// ADIVINAR EL NUMERO
const numeroAleatorio = Math.floor(Math.random() * 10) + 1

function verificarNumero() {
  const numeroUsuario = Number(document.getElementById("adivinaNumero").value)
  const resultado = document.getElementById("resultado")

  if (numeroUsuario === numeroAleatorio) {
    resultado.textContent = "¡Adivinaste el numero!"
  } else {
    resultado.textContent = "No adivinaste el numero, intenta de nuevo"
  }
}

// CALCULADORA
let operando1 = ""
let operando2 = ""
let operacionActual = ""

function agregarNumero(numero) {
  if (operacionActual === "") {
    operando1 += numero
  } else {
    operando2 += numero
  }
  actualizarResultado()
}

function operacion(operador) {
  if (operando1 !== "") {
    operacionActual = operador
    actualizarResultado()
  }
}

function calcular() {
  if (operando1 !== "" && operando2 !== "") {
    const num1 = parseFloat(operando1)
    const num2 = parseFloat(operando2)
    let resultado

    switch (operacionActual) {
      case "+":
        resultado = num1 + num2
        break
      case "-":
        resultado = num1 - num2
        break
      case "*":
        resultado = num1 * num2
        break
      case "/":
        resultado = num1 / num2
        break
    }

    operando1 = resultado.toString()
    operando2 = ""
    operacionActual = ""
    actualizarResultado()
  }
}

function borrar() {
  operando1 = ""
  operando2 = ""
  operacionActual = ""
  actualizarResultado()
}

function actualizarResultado() {
  document.getElementById("resultadoCalc").value =
    operando1 + operacionActual + operando2
}
