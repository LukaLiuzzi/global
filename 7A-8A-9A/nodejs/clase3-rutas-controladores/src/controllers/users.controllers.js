export const getUsers = (req, res) => {
  const limite = req.query.limite
  const nombre = req.query.nombre

  res.json({ message: "Lista de usuarios", limite, nombre })
}

export const getUser = (req, res) => {
  const id = req.params.id
  const limite = req.query.limite

  res.json({ message: "Informacion del usuario: ", id, limite })
}

export const createUser = (req, res) => {
  res.status(201).json({ message: "Usuario creado" })
}

export const editUser = (req, res) => {
  const id = req.params.id
  res.json({ message: "Usuario actualizado", id })
}

export const deleteUser = (req, res) => {
  const id = req.params.id
  res.json({ message: "Usuario eliminado", id })
}
