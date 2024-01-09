// Objetos
// {
//   clave: valor,
//   clave2: valor2,
//   clave3: valor3,
// }

const propiedad = "telefono"

const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 25,
  direccion: {
    calle: "Calle 1",
    numero: 123,
    ciudad: "ciudad 1",
    cp: "12345",
  },
  telefono: "1234567890",
  saludar: () => {
    console.log("Hola Luka!!")
  },
}

// Acceder mediante la notacion de punto
console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.edad)
console.log(persona.direccion.calle)
console.log(persona.propiedad) // undefined
// Acceder mediante la notacion de corchetes
console.log(persona["nombre"])
console.log(persona["apellido"])
console.log(persona["edad"])
console.log(persona["direccion"]["calle"])
console.log(persona[propiedad]) // 1234567890

// Asignar propiedades y valores a propiedades existentes
persona.nuevaPropiedad = "valor de la nueva propiedad"
persona["nuevaPropiedad2"] = "valor de la nueva propiedad 2"
// ====
persona.nombre = "Pedro"
persona["apellido"] = "Gomez"

// Clases
// class NombreDeLaClase {
//   constructor() {
//     this.propiedad = "valor"
//   }
// }

class Auto {
  constructor(marca, modelo, color, anio) {
    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.anio = anio
  }

  // Metodos
  acelerar() {
    console.log("El " + this.marca + " esta acelerando...")
  }

  frenar() {
    console.log("El " + this.marca + " esta frenando...")
  }
}

// Instanciar una clase
const auto1 = new Auto("ford", "fiesta", "rojo", 2019)
const auto2 = new Auto("chevrolet", "cruze", "azul", 2020)
console.log(auto1)
auto1.acelerar()
console.log(auto2)
auto2.acelerar()

// Practica
console.clear()

class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
  }

  comprar(nombreUsuario, cantidad) {
    if (this.stock >= cantidad) {
      this.stock = this.stock - cantidad
      console.log(
        nombreUsuario + " compro " + cantidad + " unidades de " + this.nombre
      )
    }
  }

  vender(nombreUsuario, cantidad) {
    this.stock = this.stock + cantidad
    console.log(
      nombreUsuario + " vendio " + cantidad + " unidades de " + this.nombre
    )
  }
}

const arroz = new Producto(1, "Arroz", 200, 10)
const fideos = new Producto(2, "Fideos", 100, 5)
const leche = new Producto(3, "Leche", 50, 15)

const nombre = prompt("Cual es tu nombre?")
const compra = prompt("Que queres comprar?")
const cantidad = Number(prompt("Cuantas queres comprar?"))

if (compra === "arroz") {
  arroz.comprar(nombre, cantidad)
} else if (compra === "fideos") {
  fideos.comprar(nombre, cantidad)
} else if (compra === "leche") {
  leche.comprar(nombre, cantidad)
} else {
  alert("No tenemos ese producto")
}
