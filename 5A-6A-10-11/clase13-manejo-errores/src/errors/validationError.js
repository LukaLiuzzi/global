class ValidationError extends Error {
  constructor() {
    super()
    this.name = "ValidationError"
  }

  toJson() {
    return {
      name: this.name,
      status: "ERROR",
      message: "Error en la validacion de los datos",
    }
  }
}

export default ValidationError
