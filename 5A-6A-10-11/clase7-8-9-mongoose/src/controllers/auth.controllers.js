import User from "../models/user.model.js"

export const register = (req, res) => {
  try {
    const { name, lastName, userName, password } = req.body

    // Verificar si el usuario ya existe

    // Hashear la contraseña del usuario

    // Crear un nuevo usuario

    // Guardar el nuevo usuario en la base de datos

    // Guardar el ID del usuario en la sesion

    // Responder con el usuario creado sin contraseña
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error del servidor al registrarse" })
  }
}

export const login = () => {
  try {
    const { userName, password } = req.body

    // Verificar si el usuario existe

    // Verificar si la contraseña es correcta

    // Guardar el ID del usuario en la sesion

    // Responder con el usuario logueado sin contraseña
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error del servidor al iniciar sesion" })
  }
}

export const logout = () => {}
