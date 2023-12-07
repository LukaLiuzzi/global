import AuthError from "../errors/authError.js"
import ValidationError from "../errors/validationError.js"

export const login = (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    next(new ValidationError())
    return
  }

  if (email !== "luka@luka.com" || password !== "1234") {
    next(new AuthError("Credenciales invalidas", 401))
    return
  }

  res.json({
    status: "OK",
    message: "Login exitoso",
  })
}

export const register = (req, res, next) => {
  const { email, password, confirmPassword } = req.body

  console.log(req.body)

  if (!email || !password || !confirmPassword) {
    next(new ValidationError("Faltan datos"))
    return
  }

  if (password !== confirmPassword) {
    next(new AuthError("Las contraseñas no coinciden"))
    return
  }

  res.json({
    status: "OK",
    message: "Usuario creado exitosamente",
  })
}
